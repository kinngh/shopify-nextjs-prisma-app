/**
 * Manages a Disposal Fee line item in the Shopify cart.
 *
 * This function checks the cart for products that require a disposal fee and ensures
 * that a corresponding Disposal Fee product is either added (with quantity 1),
 * maintained at quantity 1, or removed if no such products are present.
 * 
 */

// Configuration for multiple product fees
// Add or remove fee objects as needed.
// Each object requires:
// - variantId: The Shopify variant ID of the fee product.
// - propertyName: The line item property key that triggers this fee.
// - description: A human-readable description for logging.
const PRODUCT_FEES = [
    {
        variantId: '51562986733895', // Example: Disposal Fee Variant ID
        propertyName: 'disposal_fee',    // Example: Property on products that triggers disposal fee
        description: 'Disposal Fee'
    },
    {
        variantId: '51567625568583', // Example: Recupel Fee Variant ID
        propertyName: 'recupel_fee',    // Example: Property on products that triggers recupel fee
        description: 'Recupel Fee'
    },
    {
        variantId: '51567627075911', // Example: Fostplus Fee Variant ID
        propertyName: 'fostplus_fee',    // Example: Property on products that triggers fostplus fee
        description: 'Fostplus Fee'
    }
    
    // Add other fees here, for example:
    // {
    //     variantId: 'YOUR_NEXT_FEE_VARIANT_ID',
    //     propertyName: 'your_next_fee_property',
    //     description: 'Special Handling Fee'
    // }
];

// Global state for optimization
let isInternallyManagingFee = false; // Lock for the internal function
let manageFeeDebounceTimeoutId = null;
const DEBOUNCE_DELAY = 200; // milliseconds, adjust as needed

async function _internalExecuteManageProductFees(eventSource) {
    if (isInternallyManagingFee) {
        console.log(`_internalExecuteManageProductFees already running (called by ${eventSource}). Aborting new call.`);
        return;
    }
    isInternallyManagingFee = true;
    console.log(`Executing _internalExecuteManageProductFees, triggered by: ${eventSource}`);

    let anyCartUpdateMadeThisRun = false;

    try {
        const cartResponse = await fetch(`/cart.js`, {
            headers: { 'Accept': 'application/json' }
        });

        if (!cartResponse.ok) {
            console.error(`Failed to fetch cart (triggered by ${eventSource}):`, cartResponse.status, await cartResponse.text());
            isInternallyManagingFee = false; // Release lock
            return;
        }
        const cart = await cartResponse.json();

        for (const feeConfig of PRODUCT_FEES) {
            console.log(`Processing fee: ${feeConfig.description} (Variant ID: ${feeConfig.variantId}, Property: ${feeConfig.propertyName})`);

            let anyProductRequiresThisFee = false;
            let feeItemInCart = null;

            for (const item of cart.items) {
                if (String(item.variant_id) === feeConfig.variantId) {
                    feeItemInCart = item;
                } else {
                    // Check if the item has the specific property that triggers *this* fee
                    if (item.properties && item.properties[feeConfig.propertyName]) {
                        anyProductRequiresThisFee = true;
                        // console.log(`Item requiring ${feeConfig.description}:`, item); // Optional detailed logging
                    }
                }
            }

            // console.log(`${feeConfig.description} Item in cart (triggered by ${eventSource}):`, feeItemInCart); // Optional detailed logging

            let cartUpdateRequest = null;

            if (anyProductRequiresThisFee) {
                if (!feeItemInCart) {
                    console.log(`Product requiring ${feeConfig.description} exists. ${feeConfig.description} not in cart. Adding fee. (triggered by ${eventSource})`);
                    cartUpdateRequest = {
                        url: '/cart/add.js',
                        body: {
                            items: [{
                                id: feeConfig.variantId,
                                quantity: 1
                            }]
                        }
                    };
                } else if (feeItemInCart.quantity !== 1) {
                    console.log(`Product requiring ${feeConfig.description} exists. ${feeConfig.description} in cart with quantity ${feeItemInCart.quantity}. Setting to 1. (triggered by ${eventSource})`);
                    cartUpdateRequest = {
                        url: '/cart/change.js',
                        body: {
                            id: feeItemInCart.key, // Use key for cart/change.js
                            quantity: 1
                        }
                    };
                } else {
                    console.log(`Product requiring ${feeConfig.description} exists. ${feeConfig.description} already in cart with quantity 1. No change needed for this fee. (triggered by ${eventSource})`);
                }
            } else {
                if (feeItemInCart) {
                    console.log(`No product requiring ${feeConfig.description}. ${feeConfig.description} is in cart. Removing this fee. (triggered by ${eventSource})`);
                    cartUpdateRequest = {
                        url: '/cart/change.js',
                        body: {
                            id: feeItemInCart.key, // Use key for cart/change.js
                            quantity: 0
                        }
                    };
                } else {
                    console.log(`No product requiring ${feeConfig.description}. ${feeConfig.description} not in cart. No change needed for this fee. (triggered by ${eventSource})`);
                }
            }

            if (cartUpdateRequest) {
                console.log(`Performing cart update for ${feeConfig.description} (triggered by ${eventSource}):`, cartUpdateRequest.url, cartUpdateRequest.body);
                try {
                    const updateResponse = await fetch(cartUpdateRequest.url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify(cartUpdateRequest.body)
                    });

                    if (!updateResponse.ok) {
                        const errorData = await updateResponse.text();
                        console.error(`Failed to update cart for ${feeConfig.description} (triggered by ${eventSource}):`, updateResponse.status, errorData);
                    } else {
                        console.log(`Cart updated successfully for ${feeConfig.description} (triggered by ${eventSource}).`);
                        anyCartUpdateMadeThisRun = true; // Mark that an update was made
                    }
                } catch (fetchError) {
                    console.error(`Network or other error during cart update for ${feeConfig.description} (triggered by ${eventSource}):`, fetchError);
                }
            }
        } // End of loop for PRODUCT_FEES

        // Refresh cart view if any update was made during this execution run
        if (anyCartUpdateMadeThisRun) {
            console.log(`One or more fee updates occurred. Attempting to refresh cart view (triggered by ${eventSource}).`);
            if (window.ajaxCart && typeof window.ajaxCart.load === 'function') {
                console.log(`Refreshing cart view via ajaxCart.load (triggered by ${eventSource}).`);
                window.ajaxCart.load(false, false, false, true);
                
                const cartFormElement = document.querySelector('form.form-cart, .cart-empty');
                
                if (cartFormElement) {
                    const cartPageSection = cartFormElement.closest('[id^="shopify-section-"]');

                    if (cartPageSection && cartPageSection.id) {
                        const sectionId = cartPageSection.id;
                        console.log(`Attempting to manually refresh Shopify section: ${sectionId} (triggered by ${eventSource})`);

                        fetch(window.location.href)
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error(`HTTP error ${response.status} when fetching page for section refresh.`);
                                }
                                return response.text();
                            })
                            .then(html => {
                                const parser = new DOMParser();
                                const doc = parser.parseFromString(html, 'text/html');
                                const newSectionElement = doc.querySelector(`#${sectionId}`);

                                if (newSectionElement) {
                                    cartPageSection.innerHTML = newSectionElement.innerHTML;
                                    console.log(`Shopify section ${sectionId} manually refreshed from fetched HTML (triggered by ${eventSource}).`);
                                } else {
                                    console.warn(`Could not find section #${sectionId} in the fetched HTML. Manual refresh failed for this section (triggered by ${eventSource}).`);
                                }
                            })
                            .catch(error => {
                                console.error(`Error during manual refresh of Shopify section #${sectionId} (triggered by ${eventSource}):`, error);
                            });
                    } else {
                        console.warn("Cart form element found, but it's not within a recognizable Shopify section (id starting with 'shopify-section-'). Manual DOM refresh for section skipped (triggered by ${eventSource}).");
                    }
                } else {
                    // console.log("Not on a page with 'form.form-cart' or '.cart-empty'. Skipping targeted manual DOM refresh. (triggered by ${eventSource})");
                }
            } else {
                console.warn(`window.ajaxCart.load function not found. Cart view may not auto-update. (triggered by ${eventSource})`);
            }
        } else {
            console.log(`No cart updates were necessary for any fees during this run (triggered by ${eventSource}).`);
        }

    } catch (error) {
        console.error(`Error in _internalExecuteManageProductFees (triggered by ${eventSource}):`, error);
    } finally {
        isInternallyManagingFee = false;
        console.log(`Finished _internalExecuteManageProductFees (triggered by ${eventSource}). Lock released.`);
    }
}

// Debounced public function
function manageProductFeesInCart(eventSource) {
    // console.log(`manageProductFeesInCart called by ${eventSource}. Debouncing...`); // Can be noisy
    if (manageFeeDebounceTimeoutId) {
        clearTimeout(manageFeeDebounceTimeoutId);
    }
    manageFeeDebounceTimeoutId = setTimeout(() => {
        _internalExecuteManageProductFees(eventSource);
        manageFeeDebounceTimeoutId = null;
    }, DEBOUNCE_DELAY);
}

// Event Listeners
window.addEventListener('stickyAddToCart', function() {
    console.log('Sticky Add To Cart event detected. Scheduling fee check.');
    manageProductFeesInCart('stickyAddToCart');
});

window.addEventListener('listCart', function() {
    console.log('List Cart event detected. Scheduling fee check.');
    manageProductFeesInCart('listCart');
});