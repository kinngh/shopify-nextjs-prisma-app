import {
  reactExtension,
  Icon,
  InlineStack,
  Pressable,
  Text,
} from '@shopify/ui-extensions-react/admin';

reactExtension('Playground', () => <Extension />);

function Extension() {
  return (
    <Pressable padding="base">
      <InlineStack>
        <Text>Go to Apps Dashboard</Text>
        <Icon name="AppsMajor" />
      </InlineStack>
    </Pressable>
  );
}
