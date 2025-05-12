# Select, Option and OptionGroup

Selects let users choose one option from an options menu. Consider select
when you have 4 or more options, to avoid cluttering the interface.

## Notes

`<OptGroup>` can be used as an alias to `<OptionGroup>`

## Examples

### Default

```jsx
<Select label="Cats and dogs">
  <Option value="british-shorthair">Bristish shorthair</Option>
  <Option value="maine-coon">Maine coon</Option>
  <Option value="persian">Persian</Option>
  <Option value="germa-shepherd">German Shepherd</Option>
  <Option value="bulldog">Bulldog</Option>
  <Option value="labrador-retriever">Labrador Retriever</Option>
</Select>
```

or

```jsx
const selectOptions = [
  {value: 'british-shorthair', label: 'Bristish shorthair'},
  {value: 'maine-coon', label: 'Maine coon'},
  {value: 'persian', label: 'Persian'},
  {value: 'germa-shepherd', label: 'German Shepherd'},
  {value: 'bulldog', label: 'Bulldog'},
  {value: 'labrador-retriever', label: 'Labrador Retriever'},
];

<Select label="Cats and dogs" options={selectOptions} />;
```

### Groups of options

```jsx
<Select label="Cats and dogs">
  <OptionGroup label="Cats">
    <Option value="british-shorthair">Bristish shorthair</Option>
    <Option value="maine-coon">Maine coon</Option>
    <Option value="persian">Persian</Option>
  </OptionGroup>

  <OptionGroup label="Dogs">
    <Option value="germa-shepherd">German Shepherd</Option>
    <Option value="bulldog">Bulldog</Option>
    <Option value="labrador-retriever">Labrador Retriever</Option>
  </OptionGroup>
</Select>
```

or with alias

```jsx
<Select label="Cats and dogs">
  <OptGroup label="Cats">
    <Option value="british-shorthair">Bristish shorthair</Option>
    <Option value="maine-coon">Maine coon</Option>
    <Option value="persian">Persian</Option>
  </OptGroup>

  <OptGroup label="Dogs">
    <Option value="germa-shepherd">German Shepherd</Option>
    <Option value="bulldog">Bulldog</Option>
    <Option value="labrador-retriever">Labrador Retriever</Option>
  </OptGroup>
</Select>
```

or

```jsx
const selectOptions = [
  {
    label: 'Cats',
    options: [
      {value: 'british-shorthair', label: 'Bristish shorthair'},
      {value: 'maine-coon', label: 'Maine coon'},
      {value: 'persian', label: 'Persian'},
    ],
  },
  {
    label: 'Dogs',
    options: [
      {value: 'germa-shepherd', label: 'German Shepherd'},
      {value: 'bulldog', label: 'Bulldog'},
      {value: 'labrador-retriever', label: 'Labrador Retriever'},
    ],
  },
];

<Select label="Cats and dogs" options={selectOptions} />;
```
