import React from 'react';
import {
  render,
  Link,
} from '@shopify/ui-extensions-react/admin';


render('Playground', () => <App />);

function App() {
  return (
    <Link href="shopify://admin/orders">
      Shop's orders
    </Link>
  );
}
