import {
  Image,
  ImageGroup,
  View,
  extension,
} from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.page.render',
  (root, api) => {
    renderApp(root, api);
  },
)

function renderApp(root, api) {
  const firstImage = root.createComponent(Image, {
    source: "../assets/flower.jpg"
  });

  const secondeImage = root.createComponent(Image, {
    source: "../assets/flower.jpg"
  });

  const thirdImage = root.createComponent(Image, {
    source: "../assets/flower.jpg"
  });

  const imageGroup = root.createComponent(ImageGroup);

  imageGroup.append(firstImage);
  imageGroup.append(secondeImage);
  imageGroup.append(thirdImage);

  const view = root.createComponent(View, {maxInlineSize: 300});
  view.append(imageGroup);

  root.append(view);
}
