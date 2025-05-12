# Section

`Section` is a structural component that allows thematic grouping of content. Its visual style is contextual and controlled by Shopify, so a `Section` may look different depending on the component it is nested inside.

`Section` also automatically increases the heading level for its content to ensure a semantically correct heading structure in the document. To further increase the heading level inside the `Section`, consider nesting new `Section`s.

## Expected HTML in Web host

Note that the rendered heading level in the examples are assuming that the `Section` is nested within the root of the HTML document. The document itself is a "section", therefore its children `Heading` will be level 1. Sibling `Section`s will start their heading level at 2.

<table>
<tr>
<th width="50%">React</th>
<th width="50%">Expected HTML</th>
</tr>
<tr>
<td valign="top">

```jsx
<Section heading="Provinces of Canada" />
```

</td>
<td valign="top">

```html
<section>
  <h2>Provinces of Canada</h2>
</section>
```

</td>
</tr>

<tr>
<td valign="top">

```jsx
<Section>
  <Heading>Provinces of Canada</Heading>
</Section>
```

</td>
<td valign="top">

```html
<section>
  <h2>Provinces of Canada</h2>
</section>
```

</td>
</tr>

<tr>
<td valign="top">

```jsx
<Section heading="Some provinces of Canada">
    <Section>
        <Heading>Quebec</Heading>
        <Text>Most of its residents are in eastern time.<Text>

        <Heading>Ontario</Heading>
        <Text>Most of its residents are in eastern time.</Text>

        <Heading>British Columbia</Heading>
        <Text>Most of its residents are in pacific time.</Text>
    </Section>
</Section>
```

</td>
<td valign="top">

```html
<section>
    <h2>Some provinces of Canada</h2>
    <section>
        <h3>Quebec</h3>
        <span>Most of its residents are in eastern time.<span>

        <h3>Ontario</h3>
        <span>Most of its residents are in eastern time.</span>

        <h3>British Columbia</h3>
        <span>Most of its residents are in pacific time.</span>
    </section>
</section>
```

</td>
</tr>
</table>
