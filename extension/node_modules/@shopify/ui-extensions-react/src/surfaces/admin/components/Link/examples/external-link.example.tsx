import React from 'react';
import {
  render,
  Link,
} from '@shopify/ui-extensions-react/admin';


render('Playground', () => <App />);

function App() {
  return (
    <Link href="https://www.shopify.ca/climate/sustainability-fund">
      Sustainability fund
    </Link>
  );
}
