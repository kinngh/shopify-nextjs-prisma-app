const r = await fetch('shopify:admin/api/graphql.json', {
  method: 'POST',
  body: JSON.stringify({
    query: `
      query GetOrders($first: Int!) {
        orders(first: $first) {
          edges {
            node {
              id
              name
              customer {
                displayName
              }
              originalTotalPriceSet {
                shopMoney {
                  amount
                }
              }
              displayFulfillmentStatus
              displayFinancialStatus
              unpaid
            }
          }
        }
      }
    `,
    variables: {first: 10},
  }),
});
const {data} = await r.json();
const orderData = data.orders.edges;

const selected = await picker({
  heading: 'Select orders',
  multiple: true,
  headers: [
    {title: 'Order'},
    {title: 'Customer'},
    {title: 'Total', type: 'number'},
  ],
  items: orderData.map((order) => {
    const {
      id,
      name,
      customer,
      originalTotalPriceSet: {shopMoney},
      displayFulfillmentStatus,
      displayFinancialStatus,
    } = order.node;

    return {
      id,
      heading: name,
      data: [customer.displayName, `$${shopMoney.amount}`],
      badges: [
        {
          content: displayFulfillmentStatus,
          tone: displayFulfillmentStatus === 'FULFILLED' ? '' : 'attention',
          progress:
            displayFulfillmentStatus === 'FULFILLED'
              ? 'complete'
              : 'incomplete',
        },
        {
          content: displayFinancialStatus,
          tone: displayFinancialStatus === 'PENDING' ? 'warning' : '',
          progress:
            displayFinancialStatus === 'PENDING' ? 'incomplete' : 'complete',
        },
      ],
    };
  }),
});
