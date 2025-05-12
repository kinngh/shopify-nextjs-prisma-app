import {
  extension,
  FunctionSettings,
  TextField,
  Section,
} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.settings.validation.render',
  async (root, api) => {
    // Use Direct API access to fetch initial
    // metafields from the server if we are
    // rendering against a pre-existing `Validation`
    const initialSettings = api.data.validation
      ? await fetchSettings(api.data.validation.id)
      : {};

    const textField = root.createComponent(TextField, {
      value: initialSettings.name,
      label: 'Name',
      name: 'name',
      onChange(value) {
        textField.updateProps({value, error: undefined});
        api.applyMetafieldsChange({
          type: 'updateMetafield',
          namespace: '$app:my_namespace',
          key: 'name',
          value,
          valueType: 'single_line_text_field',
        });
      },
    });

    const section = root.createComponent(Section, {
      heading: 'Settings',
    });

    const settings = root.createComponent(FunctionSettings, {
      onError(errors) {
        textField.updateProps({error: errors[0]?.message});
      },
    });

    section.append(textField);
    settings.append(section);
  },
);
