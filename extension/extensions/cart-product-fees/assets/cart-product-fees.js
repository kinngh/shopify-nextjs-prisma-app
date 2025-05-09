/**
 * Manages a Disposal Fee line item in the Shopify cart.
 *
 * This function checks the cart for products that require a disposal fee and ensures
 * that a corresponding Disposal Fee product is either added (with quantity 1),
 * maintained at quantity 1, or removed if no such products are present.
 * 
 */
async function manageDisposalFeeInCart(eventListener) {
    // !!! IMPORTANT: Replace with the ACTUAL VARIANT ID of your disposal fee product !!!
    const DISPOSAL_FEE_VARIANT_ID = '51562986733895';

    // This is the property name we'll look for on other line items
    // to determine if they trigger the disposal fee.
    const DISPOSAL_FEE_PROPERTY_NAME = 'disposal_fee'; // Example property name

    // Optional: A property to specifically mark the disposal fee line item itself.
    const IS_DISPOSAL_FEE_PROPERTY_NAME = '_is_disposal_fee';
    const IS_DISPOSAL_FEE_PROPERTY_VALUE = 'true';

    console.log('Checking and managing disposal fee in cart...');

    try {
        const cartResponse = await fetch(`/cart.js`, {
            headers: { 'Accept': 'application/json' }
        });

        if (!cartResponse.ok) {
            console.error('Failed to fetch cart:', cartResponse.status, await cartResponse.text());
            return;
        }
        const cart = await cartResponse.json();

        let anyProductRequiresFee = false;
        let disposalFeeItem = null;

        for (const item of cart.items) {
            if (String(item.variant_id) === DISPOSAL_FEE_VARIANT_ID) {
                disposalFeeItem = item;
            } else {
                // Check if the item has the property indicating it requires a disposal fee
                if (item.properties && item.properties[DISPOSAL_FEE_PROPERTY_NAME]) {
                    anyProductRequiresFee = true;

                    console.log('Item:', item);
                    console.log('Properties:', item.properties);
                }
            }
        }

        console.log('Disposal Fee Item:', disposalFeeItem);

        let cartUpdateRequest = null;

        if (anyProductRequiresFee) {
            if (!disposalFeeItem) {
                // Fee is required, but not in cart: Add it with quantity 1.
                console.log('Product requiring fee exists. Disposal fee not in cart. Adding fee.');
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
                // Fee is required and in cart, but quantity is not 1: Update to 1.
                console.log(`Product requiring fee exists. Disposal fee in cart with quantity ${disposalFeeItem.quantity}. Setting to 1.`);
                cartUpdateRequest = {
                    url: '/cart/change.js',
                    body: {
                        id: disposalFeeItem.key, // Use line item key for precision
                        quantity: 1
                    }
                };
            } else {
                console.log('Product requiring fee exists. Disposal fee already in cart with quantity 1. No change needed.');
            }
        } else { // No product requiring fee exists in the cart
            if (disposalFeeItem) {
                // Fee is not required, but it's in the cart: Remove it (set quantity to 0).
                console.log('No product requiring fee. Disposal fee is in cart. Removing fee.');
                cartUpdateRequest = {
                    url: '/cart/change.js',
                    body: {
                        id: disposalFeeItem.key, // Use line item key
                        quantity: 0
                    }
                };
            } else {
                console.log('No product requiring fee. Disposal fee not in cart. No change needed.');
            }
        }

        if (cartUpdateRequest) {
            console.log('Performing cart update:', cartUpdateRequest.url, cartUpdateRequest.body);
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
                console.error('Failed to update cart for disposal fee:', updateResponse.status, errorData);
                // Consider alerting the user or triggering a full page reload as a fallback
                // alert('There was an issue updating your cart for the disposal fee. Please review your cart or refresh the page.');
            } else {
                console.log('Cart updated successfully regarding disposal fee.');

                // IMPORTANT: After a cart update, the Shopify theme needs to
                // re-render the cart display. This might happen automatically if the theme
                // listens to cart AJAX responses, or you might need to trigger it manually.

                // const newEventListener = new CustomEvent(eventListener);
                // window.dispatchEvent(newEventListener);

                console.log(window);
                console.log(window.ajaxCart);

                // updateCartPanel(response = false, openCartPanel = true, undoRemove = false, forceRefetch = false)

                window.ajaxCart.load(false, true, false, true);
            }
        }

    } catch (error) {
        console.error('Error in manageDisposalFeeInCart:', error);
    }
}

let stickyAddToCartExecuted = false;
let listCartTimeout;

window.addEventListener('stickyAddToCart', function() {
    console.log('Sticky Add To Cart event detected.');
    // Clear any pending listCart timeout
    if (listCartTimeout) {
        clearTimeout(listCartTimeout);
    }
    stickyAddToCartExecuted = true;
    manageDisposalFeeInCart('stickyAddToCart');
    // Reset flag after execution
    setTimeout(() => {
        stickyAddToCartExecuted = false;
    }, 100);
});

window.addEventListener('listCart', function() {
    console.log('List Cart event detected.');
    // Add small delay to allow stickyAddToCart to execute first if it's going to
    listCartTimeout = setTimeout(() => {
        if (!stickyAddToCartExecuted) {
            manageDisposalFeeInCart('listCart');
        }
    }, 100);
});