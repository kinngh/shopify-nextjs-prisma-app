const {resourcePicker} = useApi(TARGET);

const selected = await resourcePicker({type: 'product'});
