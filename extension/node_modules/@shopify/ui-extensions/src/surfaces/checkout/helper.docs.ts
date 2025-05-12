import type {CodeTabType, ExampleType} from '@shopify/generate-docs';

const examplePath = '../../../../../docs/surfaces/checkout/reference/examples';

type NonEmptyArray<T> = [T, ...T[]];
type ExtensionExampleLanguage = 'js' | 'jsx';
type ExtensionCodeTabConfig = Record<
  ExtensionExampleLanguage,
  {
    title: string;
    fileExtension: 'ts' | 'tsx';
  }
>;
const codeExampleTabConfig: ExtensionCodeTabConfig = {
  js: {
    title: 'JavaScript',
    fileExtension: 'ts',
  },
  jsx: {
    title: 'React',
    fileExtension: 'tsx',
  },
};

/**
 * Returns all examples available, specified with a key for reference.
 */
export function getExamples(
  languages: NonEmptyArray<ExtensionExampleLanguage>,
): Record<string, ExampleType> {
  if (!languages || languages.length === 0) {
    throw new HelperDocsError(
      'You must define at least one extension code language context you wish to retrieve the example(s) for.',
    );
  }
  /**
   * Provides the code tab for the requested languages in "JavaScript" and "React".
   */
  function getExtensionCodeTabs(name: string): CodeTabType[] {
    return languages.map((language) => {
      return {
        code: `${examplePath}/${name}.example.${codeExampleTabConfig[language].fileExtension}`,
        language,
        title: codeExampleTabConfig[language].title,
      };
    });
  }

  // Add new examples here that can be shared across multiples pages.
  return {
    'ui-components/checkbox-links': {
      description:
        'To provide buyers with additional information or references, couple it with link components seamlessly within checkbox components. This can be done by including links as part of the checkbox label in the checkbox. This will provide an easy way to access relevant content that buyers may need.',
      image: 'checkbox-links.png',
      codeblock: {
        title: 'Embedding links in checkbox components',
        tabs: getExtensionCodeTabs('ui-components/checkbox-links'),
      },
    },
    'ui-components/clipboarditem-qrcode': {
      description:
        'When displaying a QR code, include an alternative way for the user to get the content',
      image: 'clipboard-qrcode.png',
      codeblock: {
        title: "Copying content of a QR code to the user's clipboard",
        tabs: getExtensionCodeTabs('ui-components/clipboarditem-qrcode'),
      },
    },
    'ui-components/clipboarditem-oncopy': {
      description:
        'Use the onCopy property to display an icon that swaps to a checkmark when the text is copied.',
      image: 'clipboard-oncopy.png',
      codeblock: {
        title: 'Swapping an icon when the text is copied',
        tabs: getExtensionCodeTabs('ui-components/clipboarditem-oncopy'),
      },
    },
    'ui-components/disclosure-and-alignment': {
      description:
        'Use the Disclosure component to simplify the user experience and reveal interfaces only when the customer requests it. It also demonstrates how a combination of inline and block layout components can improve the readability of information. By employing these strategies, users can easily scan and comprehend the content, making for a better user experience overall.',
      image: 'disclosure-and-alignment.gif',
      codeblock: {
        title:
          'Strategies for simplifying layout and aligning content using Disclosure and Inline/Block Layout components.',
        tabs: getExtensionCodeTabs('ui-components/disclosure-and-alignment'),
      },
    },
    'ui-components/loading-skeletons': {
      description:
        'When adding content to a layout, incorporate a skeleton loader that renders the approximate size and position of the content during loading. This will provide a seamless transition from skeleton loaders to the content, and prevent any layout shift when the resulting content loads.',
      image: 'loading-skeletons.gif',
      codeblock: {
        title:
          'Using skeleton loaders to prevent layout shifts on content load.',
        tabs: getExtensionCodeTabs('ui-components/loading-skeletons'),
      },
    },
    'ui-components/togglebuttongroup-time-picking': {
      image: 'togglebuttongroup-time-picking.png',
      description: `The ToggleButtonGroup component is ideal for a small set of options.  It allows for easy scanning of available choices. Also the component’s big tap target makes it a good choice for enhanced mobile experience. However, in a grid layout, having more than 6 ToggleButtons can get overwhelming and take up too much vertical space. When there are more than 6 choices, consider using the [Select](/docs/api/checkout-ui-extensions/components/forms/select) component instead. `,
      codeblock: {
        title: 'Displaying a small set of time choices',
        tabs: getExtensionCodeTabs(
          'ui-components/togglebuttongroup-time-picking',
        ),
      },
    },
    'ui-components/choicelist-survey': {
      description: `The base variant’s flexibility allows for the creation of Likert scales using the ChoiceList component. By utilizing layout components, you can easily structure rows and columns for this purpose.`,
      image: 'choicelist-survey.png',
      codeblock: {
        title: 'Custom survey using the base variant',
        tabs: getExtensionCodeTabs('ui-components/choicelist-survey'),
      },
    },
    'ui-components/choicelist-details': {
      description: `The ChoiceList’s group variant, combined with the details property, allows for the conditional display of information when needed.`,
      image: 'choicelist-details.png',
      codeblock: {
        title: 'Collecting additional information',
        tabs: getExtensionCodeTabs('ui-components/choicelist-details'),
      },
    },
    'ui-components/choicelist-time-picking': {
      description: `The ChoiceList component is great for presenting a concise list of options, particularly when showcasing time ranges due to its ample horizontal space. However, if there’s more than 5 choices, use the [Select](/docs/api/checkout-ui-extensions/components/forms/select) component instead.`,
      image: 'choicelist-time-picking.png',
      codeblock: {
        title: 'Displaying a short list of time choices',
        tabs: getExtensionCodeTabs('ui-components/choicelist-time-picking'),
      },
    },
    'ui-components/sheet-consent': {
      description:
        'The Sheet component can be used to display privacy consent preferences in the Checkout interface. Sheet can be defaulted to open for this use case.\n\n This component requires access to [Customer Privacy API](/docs/api/checkout-ui-extensions/unstable/apis/customer-privacy) to be rendered.',
      codeblock: {
        title: 'Using Sheet to display consent preferences',
        tabs: getExtensionCodeTabs('ui-components/sheet-consent'),
      },
    },
    'ui-components/sheet-description-preferences': {
      description:
        'In order to save space in the action slot, secondary actions can be placed in the content area.',
      image: 'sheet-description-preferences.png',
      codeblock: {
        title: 'Preferences button is in the description as a link',
        tabs: getExtensionCodeTabs(
          'ui-components/sheet-description-preferences',
        ),
      },
    },
    'ui-components/sheet-layout-content': {
      description:
        'The description can take in layout components to allow for different types of content to be structured in specific ways.',
      image: 'sheet-layout-content.png',
      codeblock: {
        title: 'Using layout component in the description ',
        tabs: getExtensionCodeTabs('ui-components/sheet-layout-content'),
      },
    },
    'ui-components/sheet-icon-button-preferences': {
      description:
        'An icon button can be used in the secondary actions area to allow for more space for the primary actions.',
      image: 'sheet-icon-button-preferences.png',
      codeblock: {
        title: 'Icon button used for preferences',
        tabs: getExtensionCodeTabs(
          'ui-components/sheet-icon-button-preferences',
        ),
      },
    },
    'ui-components/switch-custom-label': {
      description:
        'This example demonstrates pairing the switch with a custom label and layout while keeping it accessible to screen readers.',
      image: 'switch-custom-label.png',
      codeblock: {
        title: 'Custom label',
        tabs: getExtensionCodeTabs('ui-components/switch-custom-label'),
      },
    },
    'ui-components/progress-determinate-state': {
      description:
        'In a determinate state, [TextBlock](../titles-and-text/textblock) or [Text](../titles-and-text/text) components can be used to communicate what the progress bar is tracking, and to set clear expectations about the current progress.',
      image: 'progress-determinate.png',
      codeblock: {
        title: 'Determinate state',
        tabs: getExtensionCodeTabs('ui-components/progress-determinate-state'),
      },
    },
    'ui-components/qrcode-image': {
      description:
        'The QRCode component can display an image in the center. Adding a logo can increase brand trust and set expectations for the action when scanning.',
      image: 'qrcode-image.png',
      codeblock: {
        title: 'With logo',
        tabs: getExtensionCodeTabs('ui-components/qrcode-image'),
      },
    },
    'ui-components/qrcode-fill-size': {
      description:
        'In most cases the default size should work well. If you need a different size, use `fill` to make it grow to the size of its parent container.',
      image: 'qrcode-fill-size.png',
      codeblock: {
        title: 'Fill size',
        tabs: getExtensionCodeTabs('ui-components/qrcode-fill-size'),
      },
    },
  };
}

/**
 * Returns a specific `Example` by name, as specified in `getExamples()`.
 * Specify whether you want to include both `js` and `jsx`examples or just one.
 */
export function getExample(
  name: string,
  languages: NonEmptyArray<ExtensionExampleLanguage> = ['js'],
): ExampleType {
  const example = getExamples(languages)[name];
  if (!example) {
    throw new HelperDocsError(
      `Could not find a matching example with the name "${name}". Does it exist within the file "docs/reference/helper.docs.ts" in getExamples()?`,
    );
  }
  return example;
}

class HelperDocsError extends Error {
  name = 'HelperDocsError';
}

export const REQUIRES_PROTECTED_CUSTOMER_DATA =
  'access to [protected customer data](/docs/apps/store/data-protection/protected-customer-data) for some properties.';
