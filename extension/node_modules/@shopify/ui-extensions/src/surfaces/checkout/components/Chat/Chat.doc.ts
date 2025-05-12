import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Chat',
  description: `
Use the Chat component to create real-time chat applications.

> Note: The Chat component can only be added to the chat targets of [checkout](/docs/api/checkout-ui-extensions/latest/targets/overlays/purchase-checkout-chat-render) and [Thank you](/docs/api/checkout-ui-extensions/latest/targets/overlays/purchase-thank-you-chat-render) pages.
`,
  thumbnail: 'chat-thumbnail.png',
  requires:
    'access to the **Chat in checkout extensions** scope. Request access in the Partner Dashboard.',
  isVisualComponent: true,
  type: 'component',
  definitions: [
    {
      title: 'ChatProps',
      description: '',
      type: 'ChatProps',
    },
    {
      title: 'App Bridge for checkout',
      description: `
The App Bridge script for checkout provides APIs that enables a secure communication channel between the Shopify checkout and the embedded application within the Chat iframe. It also offers convenient methods to perform common actions like resizing the iframe from within the application.

After App Bridge is [set up](#about-app-bridge) in your app, you have access to the \`shopify\` global variable. This variable exposes the following App Bridge functionalities and configuration information:
          `,
      type: 'AppBridge',
    },
  ],
  category: 'Components',
  subCategory: 'Overlays',
  defaultExample: {
    image: 'chat-component-minimized.png',
    codeblock: {
      title: 'Basic Chat',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Chat/examples/basic-chat.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-chat.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'src-and-query-parameters',
      title: 'Chat source and query parameters',
      sectionContent: `
The \`src\` of the iframe rendered by Chat is provided by the \`preloads\` \`chat\` key in the extension configuration file. Shopify automatically appends query parameters to the URL which allows developers to verify the authenticity of the request and the identity of the merchant. We guarantee these tokens are valid and signed by Shopify.

#### id_token
The ID token providing a set of claims as a signed [JSON Web Token (JWT)](https://openid.net/specs/openid-connect-core-1_0.html#IDToken%5C) with a TTL of 5 minutes. It can be used to retrieve merchants information on the backend as well as ensure that requests came from a Shopify authenticated source. See the [ID Token documentation](https://shopify.dev/docs/apps/build/authentication-authorization/session-tokens) for more information.

#### locale
The locale of the shop that’s embedding the app, i.e. \`en-CA\`. This information is also available in the \`shopify\` global variable under \`config\`.

#### handle
The unique handle name of the UI extension as defined by the developer. This information is also available in the \`shopify\` global variable under \`extension\`.
`,
      codeblock: {
        title: 'Chat source',
        tabs: [
          {
            title: 'shopify.extension.toml',
            code: './examples/shopify-extension-toml.example.toml',
            language: 'toml',
          },
        ],
      },
    },
    {
      type: 'Generic',
      anchorLink: 'chat-dimensions',
      title: 'Chat dimensions',
      image: 'chat-component-iframe-clipping.png',
      sectionContent: `
To provide developers with the most flexibility when it comes to responsive changes, the iframe rendered in the page by \`Chat\` takes the full width and height of the browser window. Only a specific part of the iframe is visible, the rest is clipped.

The \`inlineSize\` and \`blockSize\` values set on the Chat component or changed through the App Bridge \`resizeTo()\` method dictates the bounding box of the visible part. That box is fixed and positioned in the bottom right corner of the iframe.

Your application can rely on the window’s dimension to change styles or apply specific behaviors to different window sizes. This allow developers to style their app as if as if the application would be outside an iframe. For example, CSS media queries can now work within the iframe.
`,
    },
    {
      type: 'Generic',
      anchorLink: 'about-app-bridge',
      title: 'Getting started with App Bridge for checkout',
      sectionContent: `
You must add App Bridge to your hosted chat application by including the script tag pointing to the \`app-bridge-checkout.js\` as the first script in the \`<head>\` section as seen in the example. The script loads directly from Shopify and keeps itself up-to-date.
      `,
      codeblock: {
        title: 'Hosted chat application',
        tabs: [
          {
            code: './examples/include-app-bridge.example.html',
            language: 'html',
          },
        ],
      },
    },
    {
      type: 'Generic',
      anchorLink: 'global-variable',
      title: 'App Bridge’s global variable',
      sectionContent: `
After App Bridge is set up in your app, you have access to the \`shopify\` global variable. This variable exposes various App Bridge functionalities, such as resizing the iframe or retrieving details of the shop.

The [reference](#app%20bridge%20for%20checkout) above list all the available methods and properties.

Alternatively, to explore all the functionality available on the \`shopify\` global variable:

* Open the Chrome developer console while in checkout.
* Switch the frame context to your app's iframe.
* Enter \`shopify\` in the console.
`,
      codeblock: {
        title: 'shopify',
        tabs: [
          {
            title: 'config',
            code: './examples/app-bridge-shopify-config.example.js',
            language: 'js',
          },
        ],
      },
    },
    {
      type: 'Generic',
      anchorLink: 'app-bridge-css-api',
      title: 'App Bridge’s CSS API',
      sectionContent: `
Since the Chat iframe is clipped and fills the whole window as seen in the previous section, using percentage based sizes for its UI elements will most likely resolves in clipped content. As mentioned in the UX guidelines, Chat is constraint to specific [maximum sizes on large and small screens](/docs/apps/build/checkout/chat/ux-for-chat#build-within-the-chat-component-dimensions) set by Shopify. Setting a 100% width on an element will not be constraint to the visible size of the iframe, but to the whole window.

To remediate this issue, through App Bridge we offer a set of [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) with all the maximum dimensions defined in our UX guidelines. You can use these custom properties whether in Javascript or in the CSS of you application to set protections against overflowing content while using percentage based sizes. Using these properties will also reduce regressions if Shopify ever changes the maximum dimensions.
`,
      codeblock: {
        title: 'App Bridge CSS API',
        tabs: [
          {
            title: 'Custom properties',
            code: './examples/app-bridge-css.example.css',
            language: 'css',
          },
          {
            title: 'style.css',
            code: './examples/chat-custom-properties-css.example.css',
            language: 'css',
          },
        ],
      },
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        description:
          'A very common action in your application will be to request a resize of the iframe. This is done through the App Bridge `resizeTo()` method. The following example resizes the iframe following the click of an activator button to show a dialog window.',
        codeblock: {
          title: 'Resize the Chat iframe from the hosted application',
          tabs: [
            {
              title: 'UI Extension',
              code: './examples/app-bridge-resize.example.tsx',
              language: 'tsx',
            },
            {
              title: 'Hosted chat application',
              code: './examples/app-bridge-resize.example.html',
              language: 'html',
            },
          ],
        },
      },
      {
        description: `
Information can be passed between the hosted application and the UI extension through App Bridge. [Extensions API](/docs/api/checkout-ui-extensions/unstable#extension-apis) are available in the UI extension and can be shared through that method.
        `,
        codeblock: {
          title:
            'Communicate information between the hosted application and the UI extension',
          tabs: [
            {
              title: 'UI Extension',
              code: './examples/app-bridge-communication.example.tsx',
              language: 'tsx',
            },
            {
              title: 'Hosted chat application',
              code: './examples/app-bridge-communication.example.js',
              language: 'js',
            },
          ],
        },
      },
    ],
  },

  related: [],
};

export default data;
