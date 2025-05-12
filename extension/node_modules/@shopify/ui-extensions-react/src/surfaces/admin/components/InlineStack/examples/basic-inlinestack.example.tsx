import React from 'react';
import {
  render,
  InlineStack,
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
  return (
    <InlineStack gap>
      <>Child 1</>
      <>Child 2</>
      <>Child 3</>
      <>Child 4</>
    </InlineStack>
  );
}
