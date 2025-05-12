import {
  Image,
  ImageGroup,
  View,
  reactExtension,
} from '@shopify/ui-extensions-react/customer-account';
import React from 'react';

export default reactExtension('customer-account.page.render', () => <App />);

function App() {
  return (
    <View maxInlineSize={300}>
      <ImageGroup>
        <Image source="../assets/flower.jpg" />
        <Image source="../assets/flower.jpg" />
        <Image source="../assets/flower.jpg" />
      </ImageGroup>
    </View>
  );
}
