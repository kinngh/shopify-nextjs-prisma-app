// @ts-check

/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 * @typedef {import("../generated/api").CartOperation} CartOperation
 * @typedef {import("../generated/api").UpdateOperation} UpdateOperation // Assuming this is the payload for an update, similar to ExpandOperation
 */

// Constant for the Disposal Fee Product Variant ID
// IMPORTANT: Ensure this ID is correct for your store.
const DISPOSAL_FEE_VARIANT_ID = "gid://shopify/ProductVariant/51562986733895";

/**
 * @type {FunctionRunResult}
 */
const NO_CHANGES = {
  operations: [],
};

/**
 * @param {RunInput} input
 * @returns {FunctionRunResult}
 */
export function run(input) {
  let disposalFeeCartLineId = null;
  let totalCalculatedFee = 0.0;

  if (!input.cart || !input.cart.lines || input.cart.lines.length === 0) {
    console.warn("Cart or cart lines are not available. No operations to perform.");
    return NO_CHANGES;
  }

  for (const line of input.cart.lines) {
    // Ensure line.merchandise and line.merchandise.id are valid
    if (line.merchandise?.__typename === "ProductVariant" && line.merchandise.id) {
      if (line.merchandise.id === DISPOSAL_FEE_VARIANT_ID) {
        // Found the disposal fee line item. Capture its ID.
        // If multiple instances exist, this will capture the first one.
        if (disposalFeeCartLineId === null) {
          disposalFeeCartLineId = line.id;
        }
        // The fee item itself does not contribute to the fee calculation.
      } else if (line.merchandise.product) {
        // This is a different product. Check for its 'custom.disposal_fee' metafield.
        // Assumes 'line.merchandise.product.metafield' is the specific 'custom.disposal_fee'
        // metafield, as configured by the Function's GraphQL query.
        const productMetafield = line.merchandise.product.metafield;

        if (
          productMetafield && // Check if the metafield object exists
          typeof productMetafield.value === 'string' // Check if it has a string value
        ) {
          const feeValueString = productMetafield.value;
          const feeValue = parseFloat(feeValueString);

          if (!isNaN(feeValue) && feeValue > 0) {
            totalCalculatedFee += feeValue * line.quantity;
          } else {
            console.warn(
              `Invalid or non-positive fee value ("${feeValueString}") from 'custom.disposal_fee' metafield for product variant ${line.merchandise.id}.`
            );
          }
        }
        // If your GraphQL query returns an array of metafields (e.g., line.merchandise.product.metafields),
        // you would need to find the 'custom.disposal_fee' metafield within that array, for example:
        // const metafields = line.merchandise.product.metafields;
        // const targetMetafield = metafields?.find(
        //   (mf) => mf.namespace === 'custom' && mf.key === 'disposal_fee'
        // );
        // if (targetMetafield && typeof targetMetafield.value === 'string') { /* ... process targetMetafield.value ... */ }
      }
    }
  }

  // If the disposal fee product line was not found in the cart, no adjustment can be made.
  if (!disposalFeeCartLineId) {
    console.log(`Disposal fee product (variant ID: ${DISPOSAL_FEE_VARIANT_ID}) not found in cart. No price adjustment will be made.`);
    return NO_CHANGES;
  }

  // If the fee item is in the cart, create an update operation.
  // Its price will be the total sum of fees collected from other items.
  // If totalCalculatedFee is 0.0 (no other items had valid fees), its price becomes 0.00.
  /** @type {UpdateOperation} */
  const updateOperationData = {
    cartLineId: disposalFeeCartLineId,
    price: {
      adjustment: {
        fixedPricePerUnit: {
          amount: totalCalculatedFee,
        },
      },
    },
  };

  /** @type {CartOperation} */
  const cartOperation = {
    update: updateOperationData,
  };

  console.log(`Proposing update for disposal fee line item ${disposalFeeCartLineId}: set total price to ${totalCalculatedFee.toFixed(2)}.`);
  return { operations: [cartOperation] };
}