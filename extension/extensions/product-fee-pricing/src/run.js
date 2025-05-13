// @ts-check

/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 * @typedef {import("../generated/api").CartOperation} CartOperation
 * @typedef {import("../generated/api").UpdateOperation} UpdateOperation
 */

// Configuration for multiple fee types
// IMPORTANT: Ensure these IDs and metafield keys are correct for your store.
const FEE_CONFIGURATIONS = [
  {
    name: "Disposal Fee",
    variantId: "gid://shopify/ProductVariant/51562986733895", // Existing Disposal Fee Variant ID
    metafieldNamespace: "custom",
    metafieldKey: "disposal_fee"
  },
  {
    name: "Recupel Fee",
    variantId: "gid://shopify/ProductVariant/51567625568583", // Existing Disposal Fee Variant ID
    metafieldNamespace: "custom",
    metafieldKey: "recupel_fee"
  },
  {
    name: "Fostplus Fee",
    variantId: "gid://shopify/ProductVariant/51567627075911", // Existing Disposal Fee Variant ID
    metafieldNamespace: "custom",
    metafieldKey: "fostplus_fee"
  }
];

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
  if (!input.cart || !input.cart.lines || input.cart.lines.length === 0) {
    console.warn("Cart or cart lines are not available. No operations to perform.");
    return NO_CHANGES;
  }

  // Initialize an object to store data for each fee type (cartLineId and calculatedFee)
  // Keyed by feeConfig.variantId for easy lookup
  const feeData = {};
  FEE_CONFIGURATIONS.forEach(config => {
    feeData[config.variantId] = {
      name: config.name,
      cartLineId: null,       // Will store the ID of the fee item in the cart
      calculatedFee: 0.0,     // Will sum up fees from other products
      metafieldNamespace: config.metafieldNamespace,
      metafieldKey: config.metafieldKey,
    };
  });

  // Iterate through cart lines to identify fee items and calculate fees from other products
  for (const line of input.cart.lines) {
    if (line.merchandise?.__typename === "ProductVariant" && line.merchandise.id) {
      const currentLineVariantId = line.merchandise.id;
      let isThisLineAFeeItem = false;

      // Check if the current cart line is one of the configured fee products
      if (feeData[currentLineVariantId]) {
        // It's a known fee variant. If we haven't found its cart line ID yet, store it.
        if (feeData[currentLineVariantId].cartLineId === null) {
          feeData[currentLineVariantId].cartLineId = line.id;
        }
        isThisLineAFeeItem = true;
        // This line is a fee item itself, so it doesn't contribute to fee calculations.
      }

      // If this line is NOT a fee item, check if it has metafields that trigger any fees
      if (!isThisLineAFeeItem && line.merchandise.product) {
        // Access metafields directly by the aliases defined in run.graphql
        // The product object from GraphQL will now have properties like 'metafield_disposal_fee',
        // 'metafield_recycling_fee', etc.

        for (const config of FEE_CONFIGURATIONS) {
          // Construct the expected property name from the config's metafieldKey
          const metafieldPropertyName = `metafield_${config.metafieldKey}`;
          const feeMetafield = line.merchandise.product[metafieldPropertyName];

          if (
            feeMetafield && // Check if the metafield object exists (it would be null if not found by GraphQL)
            typeof feeMetafield.value === 'string' // Check if it has a string value
          ) {
            const feeValue = parseFloat(feeMetafield.value);
            if (!isNaN(feeValue) && feeValue > 0) {
              // Add this product's fee to the total for the specific fee type
              feeData[config.variantId].calculatedFee += feeValue * line.quantity;
            } else {
              console.warn(
                `Invalid or non-positive fee value ("${feeMetafield.value}") from '${config.metafieldNamespace}.${config.metafieldKey}' metafield for product variant ${currentLineVariantId}.`
              );
            }
          }
        }
      }
    }
  }

  const operations = [];

  // Create update operations for each fee item found in the cart
  for (const variantId in feeData) {
    const currentFee = feeData[variantId];
    if (currentFee.cartLineId) { // If the fee item product was found in the cart
      /** @type {UpdateOperation} */
      const updateOperationData = {
        cartLineId: currentFee.cartLineId,
        price: {
          adjustment: {
            fixedPricePerUnit: {
              amount: currentFee.calculatedFee, // Use the specific fee's total
            },
          },
        },
      };
      operations.push({ update: updateOperationData });
      console.log(`Proposing update for ${currentFee.name} (cart line ${currentFee.cartLineId}): set total price to ${currentFee.calculatedFee.toFixed(2)}.`);
    } else {
      // Log if a fee was calculated but its corresponding fee item product wasn't in the cart
      if (currentFee.calculatedFee > 0) {
        console.log(
          `${currentFee.name} (variant ID: ${variantId}) not found in cart, but a total fee of ${currentFee.calculatedFee.toFixed(2)} was calculated. This fee will not be applied.`
        );
      } else {
         // console.log(`${currentFee.name} (variant ID: ${variantId}) not found in cart. No price adjustment needed.`);
      }
    }
  }

  if (operations.length === 0) {
    console.log("No fee adjustments to make.");
    return NO_CHANGES;
  }

  return { operations };
}