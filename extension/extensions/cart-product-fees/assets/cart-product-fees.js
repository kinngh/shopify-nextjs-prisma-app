/**
 * Manages a Disposal Fee line item in the Shopify cart.
 *
 * This function checks the cart for products that require a disposal fee and ensures
 * that a corresponding Disposal Fee product is either added (with quantity 1),
 * maintained at quantity 1, or removed if no such products are present.
 * 
 */

// Global state for optimization
let isInternallyManagingFee = false; // Lock for the internal function
let manageFeeDebounceTimeoutId = null;
const DEBOUNCE_DELAY = 200; // milliseconds, adjust as needed

async function _internalExecuteManageDisposalFee(eventSource) {
    if (isInternallyManagingFee) {
        console.log(`_internalExecuteManageDisposalFee already running (called by ${eventSource}). Aborting new call.`);
        return;
    }
    isInternallyManagingFee = true;
    console.log(`Executing _internalExecuteManageDisposalFee, triggered by: ${eventSource}`);

    const DISPOSAL_FEE_VARIANT_ID = '51562986733895';
    const DISPOSAL_FEE_PROPERTY_NAME = 'disposal_fee'; // Example property name

    try {
        const cartResponse = await fetch(`/cart.js`, {
            headers: { 'Accept': 'application/json' }
        });

        if (!cartResponse.ok) {
            console.error(`Failed to fetch cart (triggered by ${eventSource}):`, cartResponse.status, await cartResponse.text());
            return;
        }
        const cart = await cartResponse.json();

        let anyProductRequiresFee = false;
        let disposalFeeItem = null;

        for (const item of cart.items) {
            if (String(item.variant_id) === DISPOSAL_FEE_VARIANT_ID) {
                disposalFeeItem = item;
            } else {
                if (item.properties && item.properties[DISPOSAL_FEE_PROPERTY_NAME]) {
                    anyProductRequiresFee = true;
                    // console.log('Item requiring fee:', item); // Reduced verbose logging
                }
            }
        }

        // console.log(`Disposal Fee Item (triggered by ${eventSource}):`, disposalFeeItem); // Reduced verbose logging

        let cartUpdateRequest = null;

        if (anyProductRequiresFee) {
            if (!disposalFeeItem) {
                console.log(`Product requiring fee exists. Disposal fee not in cart. Adding fee. (triggered by ${eventSource})`);
                cartUpdateRequest = {
                    url: '/cart/add.js',
                    body: {
                        items: [{
                            id: DISPOSAL_FEE_VARIANT_ID,
                            quantity: 1
                        }]
                    }
                };
            } else if (disposalFeeItem.quantity !== 1) {
                console.log(`Product requiring fee exists. Disposal fee in cart with quantity ${disposalFeeItem.quantity}. Setting to 1. (triggered by ${eventSource})`);
                cartUpdateRequest = {
                    url: '/cart/change.js',
                    body: {
                        id: disposalFeeItem.key,
                        quantity: 1
                    }
                };
            } else {
                console.log(`Product requiring fee exists. Disposal fee already in cart with quantity 1. No change needed. (triggered by ${eventSource})`);
            }
        } else {
            if (disposalFeeItem) {
                console.log(`No product requiring fee. Disposal fee is in cart. Removing fee. (triggered by ${eventSource})`);
                cartUpdateRequest = {
                    url: '/cart/change.js',
                    body: {
                        id: disposalFeeItem.key,
                        quantity: 0
                    }
                };
            } else {
                console.log(`No product requiring fee. Disposal fee not in cart. No change needed. (triggered by ${eventSource})`);
            }
        }

        if (cartUpdateRequest) {
            console.log(`Performing cart update (triggered by ${eventSource}):`, cartUpdateRequest.url, cartUpdateRequest.body);
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
                console.error(`Failed to update cart for disposal fee (triggered by ${eventSource}):`, updateResponse.status, errorData);
            } else {
                console.log(`Cart updated successfully regarding disposal fee (triggered by ${eventSource}).`);
                if (window.ajaxCart && typeof window.ajaxCart.load === 'function') {
                    console.log(`Refreshing cart view via ajaxCart.load (triggered by ${eventSource}).`);
                    window.ajaxCart.load(false, false, false, true);
                    
                    // Attempt to manually refresh main cart page content if specific elements are found.
                    // This is often needed if ajaxCart.load updates a mini-cart/drawer but not the main /cart page content.
                    const cartFormElement = document.querySelector('form.form-cart, .cart-empty');
                    
                    if (cartFormElement) {
                        const cartPageSection = cartFormElement.closest('[id^="shopify-section-"]');

                        if (cartPageSection && cartPageSection.id) {
                            const sectionId = cartPageSection.id;
                            console.log(`Attempting to manually refresh Shopify section: ${sectionId} (triggered by ${eventSource})`);

                            fetch(window.location.href) // Fetch current URL to get updated section content
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
                                        // Replace the content of the existing section with the content of the new one
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
                        // console.log("Not on a page with 'form.form-cart' or '.cart-empty', likely not the main cart page. Skipping targeted manual DOM refresh. (triggered by ${eventSource})");
                    }
                } else {
                    console.warn(`window.ajaxCart.load function not found. Cart view may not auto-update. (triggered by ${eventSource})`);
                }
            }
        }

    } catch (error) {
        console.error(`Error in _internalExecuteManageDisposalFee (triggered by ${eventSource}):`, error);
    } finally {
        isInternallyManagingFee = false;
        console.log(`Finished _internalExecuteManageDisposalFee (triggered by ${eventSource}). Lock released.`);
    }
}

// Debounced public function
function manageDisposalFeeInCart(eventSource) {
    // console.log(`manageDisposalFeeInCart called by ${eventSource}. Debouncing...`); // Can be noisy, make optional
    if (manageFeeDebounceTimeoutId) {
        clearTimeout(manageFeeDebounceTimeoutId);
    }
    manageFeeDebounceTimeoutId = setTimeout(() => {
        _internalExecuteManageDisposalFee(eventSource);
        manageFeeDebounceTimeoutId = null; // Clear after the timeout has initiated the execution
    }, DEBOUNCE_DELAY);
}

// Event Listeners
window.addEventListener('stickyAddToCart', function() {
    console.log('Sticky Add To Cart event detected. Scheduling fee check.');
    manageDisposalFeeInCart('stickyAddToCart');
});

window.addEventListener('listCart', function() {
    console.log('List Cart event detected. Scheduling fee check.');
    manageDisposalFeeInCart('listCart');
});