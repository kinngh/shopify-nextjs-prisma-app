import React from 'react';
import {reactExtension, CustomerSegmentTemplate} from '@shopify/ui-extensions/admin';

function App() {
  return (
    <CustomerSegmentTemplate
        title="My Customer Segment Template"
        description="Description of the segment"
        query="number_of_orders > 0"
        createdOn={new Date('2023-01-15').toISOString()}
    />
  );
}

export default reactExtension('Playground', () => <App />);
