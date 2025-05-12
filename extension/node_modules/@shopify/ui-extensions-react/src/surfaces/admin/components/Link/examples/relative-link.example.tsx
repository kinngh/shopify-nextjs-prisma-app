import React from 'react';
import {
  render,
  Link,
} from '@shopify/ui-extensions-react/admin';


render('Playground', () => <App />);

function App() {
  return (
    <Link href="/baz">
      Link relative to current path
    </Link>
  );
}
