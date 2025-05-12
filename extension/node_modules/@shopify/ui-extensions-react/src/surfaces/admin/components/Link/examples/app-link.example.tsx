import React from 'react';
import {
  render,
  Link,
} from '@shopify/ui-extensions-react/admin';


render('Playground', () => <App />);

function App() {
  return (
    <Link href="app:bar">
      Link to app path
    </Link>
  );
}
