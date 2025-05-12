import {
  reactExtension,
  useApi,
  FunctionSettings,
  TextField,
  Section,
} from '@shopify/ui-extensions-react/admin';

export default reactExtension(
  'admin.settings.validation.render',
  async (api) => {
    // Use Direct API access to fetch initial
    // metafields from the server if we are
    // rendering against a pre-existing `Validation`
    const initialSettings = api.data.validation
      ? await fetchSettings(api.data.validation.id)
      : {};

    return <App settings={initialSettings} />;
});

function App({settings}) {
  const [value, setValue] = useState(settings);
  const [error, setError] = useState();

  const {applyMetafieldsChange} = useApi();

  return (
    <FunctionSettings
      onError={(errors) => {
        setError(errors[0]?.message);
      }}
    >
      <Section heading="Settings">
        <TextField
          label="Name"
          name="name"
          value={value}
          error={error}
          onChange={(value) => {
            setValue(value);
            setError(undefined);
            applyMetafieldsChange({
              type: 'updateMetafield',
              namespace: '$app:my_namespace',
              key: 'name',
              value,
              valueType: 'single_line_text_field',
            });
          }}
        />
      </Section>
    </FunctionSettings>
  );
}
