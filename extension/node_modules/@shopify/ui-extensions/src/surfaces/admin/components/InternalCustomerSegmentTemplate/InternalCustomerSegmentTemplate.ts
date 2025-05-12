import {createRemoteComponent} from '@remote-ui/core';

export type CustomerSegmentTemplateIcon =
  | 'categoriesMajor'
  | 'firstVisitMajor'
  | 'heartMajor'
  | 'marketingMajor'
  | 'checkoutMajor'
  | 'ordersMajor'
  | 'locationMajor'
  | 'emailNewsletterMajor'
  | 'firstOrderMajor'
  | 'billingStatementDollarMajor'
  | 'diamondAlertMajor'
  | 'abandonedCartMajor'
  | 'calendarMajor'
  | 'productsMajor'
  | 'globeMajor'
  | 'flagMajor'
  | 'uploadMajor'
  | 'buyButtonMajor'
  | 'followUpEmailMajor'
  | 'confettiMajor'
  | 'walletMajor'
  | 'viewMajor';

export type CustomerSegmentTemplateCategory =
  | 'firstTimeBuyers'
  | 'highValueCustomers'
  | 'reEngageCustomers'
  | 'abandonedCheckout'
  | 'purchaseBehaviour'
  | 'location';

/**
 * Reserved namespace and key for the customer standard metafield used in the template's query.
 * More info - https://shopify.dev/docs/apps/custom-data/metafields/definitions/standard
 */
type CustomerStandardMetafieldDependency = 'facts.birth_date';

export interface InternalCustomerSegmentTemplateProps {
  /* Localized title of the template. */
  title: string;
  /* Localized description(s) of the template. */
  description: string | string[];
  /* Icon identifier for the template. */
  icon: CustomerSegmentTemplateIcon;
  /* Code snippet to render in the template with syntax highlighting. */
  query: string;
  /* Code snippet to insert in the segment editor. If missing, `query` will be used. */
  queryToInsert?: string;
  /* List of customer standard metafields or custom metafields used in the template's query. */
  dependencies?: {
    standardMetafields?: CustomerStandardMetafieldDependency[];
    customMetafields?: string[];
  };
  /* ISO 8601-encoded date and time string. A "New" badge will be rendered for recently introduced templates. */
  createdOn?: string;
  /* The category in which the template will be visible. The template will show in its respective category and aggregate sections. */
  category: CustomerSegmentTemplateCategory;
}

/**
 * Customer segment templates are used to give merchants a starting point to create segments.
 */
export const InternalCustomerSegmentTemplate = createRemoteComponent<
  'InternalCustomerSegmentTemplate',
  InternalCustomerSegmentTemplateProps
>('InternalCustomerSegmentTemplate');
