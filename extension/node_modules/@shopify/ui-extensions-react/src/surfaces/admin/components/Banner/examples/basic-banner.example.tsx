import React from 'react';
import {
  render,
  Banner,
  Paragraph,
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <Banner title="Shipping rates changed" dismissible onDismiss={() => console.log('dismissed banner')}>
      <Paragraph>Your store may be affected</Paragraph>
    </Banner>
  );
}
