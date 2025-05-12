import React from 'react';
import {
  render,
  Divider,
  BlockStack,
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <BlockStack gap>
      <>First text</>
      <Divider />
      <>Second Text</>
    </BlockStack>
  );
}
