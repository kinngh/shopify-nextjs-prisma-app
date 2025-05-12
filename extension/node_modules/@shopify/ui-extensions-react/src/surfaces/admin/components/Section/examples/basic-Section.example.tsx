import React from 'react';
import {
  render,
  Section,
} from '@shopify/ui-extensions-react/admin';


render('Playground', () => <App />);

function App() {
  return (
    <Section heading="Section heading">
      Section content
    </Section>
  );
}
