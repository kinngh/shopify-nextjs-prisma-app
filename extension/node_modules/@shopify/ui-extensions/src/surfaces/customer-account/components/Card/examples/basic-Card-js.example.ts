import {
  Card,
  Grid,
  extension,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.page.render',
  (root, api) => {
    renderApp(root, api);
  },
)

function renderApp(root, api) {
  const card = root.createComponent(
    Card,
    {padding: true},
    [
      root.createComponent(Grid, {columns: ['1fr', 'auto'],
        spacing: "base",
        minInlineSize: "fill",
        blockAlignment: "start"}, [
        root.createComponent('BlockStack', {spacing: 'loose'}, [
          root.createComponent('Heading', undefined, 'Addresses'),
          root.createComponent('BlockStack', {spacing: 'base'}, [
            root.createComponent('Text', {appearance: "subdued"}, 'Default address'),
            root.createComponent('BlockStack', {spacing: 'extraTight'}, [
                root.createComponent('TextBlock',{}, 'Kristin Watson'),
                root.createComponent('TextBlock', {}, '1655 Island Pkwy'),
                root.createComponent('TextBlock', {}, 'Kamloops BC M7G 672'),
                root.createComponent('TextBlock', {}, 'Canada'),
            ]),
          ]),
        ]),
        root.createComponent('BlockStack', {spacing: 'loose'}, [
          root.createComponent('InlineLayout',  {blockAlignment: "center"}, [
            root.createComponent('Icon', {source: "plus", size: "small", appearance: "accent"}),
            root.createComponent('Text', {appearance: "accent"}, 'Add'),
          ]),
          root.createComponent('View', {inlineAlignment: "end"}, [
            root.createComponent('Icon', {source: "pen", size: "small", appearance: "accent"}),
          ]),
        ]),
      ]),
    ])
  root.append(card);
}
