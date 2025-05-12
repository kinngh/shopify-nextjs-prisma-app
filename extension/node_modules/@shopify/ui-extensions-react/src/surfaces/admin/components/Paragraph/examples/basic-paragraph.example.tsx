import {
    render,
    BlockStack,
    Paragraph,
} from '@shopify/ui-extensions-react/admin';

render('Playground', () => <App />);

function App() {
    return (
        <BlockStack inlineAlignment='center' gap>
            <Paragraph fontWeight='bold'>Name:</Paragraph>
            <Paragraph>Jane Doe</Paragraph>
        </BlockStack>
    )
}
