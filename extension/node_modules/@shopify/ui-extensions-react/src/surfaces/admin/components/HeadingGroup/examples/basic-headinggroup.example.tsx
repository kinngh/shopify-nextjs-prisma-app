import {
    render,
    HeadingGroup,
    Heading,
  } from '@shopify/ui-extensions-react/admin';

  render('Playground', () => <App />);

  function App() {
    return (
      <>
        <Heading>Heading &lt;h1&gt;</Heading>

        <HeadingGroup>
          <Heading>Heading &lt;h2&gt;</Heading>

          <HeadingGroup>
            <Heading>Heading &lt;h3&gt;</Heading>
          </HeadingGroup>
        </HeadingGroup>
      </>
    );
  }
