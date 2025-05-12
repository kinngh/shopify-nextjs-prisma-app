import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'DatePicker',
  description:
    'The DatePicker component is a calendar picker UI that allows users to select a single date or a date range',
  thumbnail: 'datepicker-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'DatePickerProps',
      description: '',
      type: 'DatePickerProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'datepicker-default.png',
    codeblock: {
      title: 'Basic DatePicker',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/DatePicker/examples/basic-datepicker.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-datepicker.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent:
        'By adhering to these design guidelines, the DatePicker component can offer a seamless and efficient method for users to select dates, thereby enhancing the overall user experience.\n\n- Default to showing today’s date if available.\n\n- Display the first available date when selecting future dates.\n\n- To minimize errors, the process of selecting a date range may require multiple steps. Therefore, providing a way for users to explicitly confirm their selection is recommended.\n\n**When to use a DatePicker**\n\nThe DatePicker component is well-suited for the following scenarios:\n\n- Specifying shipping or delivery dates\n\n- Scheduling pick-up dates\n\n- Booking dates for service providers\n\n- Selecting event dates for ticket offerings\n\n- Specifying rental dates to determine start and end dates for renting a product\n\n**When not to use a DatePicker component**\n\nA DatePicker component might not be the most appropriate choice in the following situations:\n\n- When the date to be entered is several years in the future or the past.\n\n- When the date is easily memorable and can be quickly typed using the keyboard e.g. Date of birth.',
    },
  ],
  related: [],
};

export default data;
