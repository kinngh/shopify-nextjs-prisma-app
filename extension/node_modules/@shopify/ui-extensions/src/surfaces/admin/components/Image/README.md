# Image

The Image component is used to embed an image into the document and control its presentation. It should be used for large format, responsive images.

## Examples

### Basic usage

```tsx
export function MyComponent() {
  return (
    <Image
      // or accessibilityLabel
      alt="A red shirt"
      // or source
      src="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
    />
  );
}
```
