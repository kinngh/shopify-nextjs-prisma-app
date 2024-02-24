/*

  DEV ONLY --> `npm run update:url`

  LIMITATION:
  - [OEM] Cannot update GDPR URLs.
  - [OEM] Cannot update App Proxy URL.
  - May break with a future update to `@shopify/cli-kit`.
 */

/*

import { partnersRequest } from "@shopify/cli-kit/node/api/partners";
import { ensureAuthenticatedPartners } from "@shopify/cli-kit/node/session";
import { renderSelectPrompt } from "@shopify/cli-kit/node/ui";
import "dotenv/config";

const UpdateAppURLQuery = `
  mutation appUpdate($apiKey: String!, $applicationUrl: Url!, $redirectUrlWhitelist: [Url]!) {
    appUpdate(input: {apiKey: $apiKey, applicationUrl: $applicationUrl, redirectUrlWhitelist: $redirectUrlWhitelist}) {
      userErrors {
        message
        field
      }
    }
  }`;

const FindAppQuery = `
  query FindApp($apiKey: String!) {
    app(apiKey: $apiKey) {
      id
      title
      apiKey
      organizationId
      apiSecretKeys {
        secret
      }
      appType
      grantedScopes
    }
  }`;

const AllOrganizationsQuery = `
  {
    organizations(first: 200) {
      nodes {
        id
        businessName
        website
      }
    }
  }`;

const selectOrg = async (accessToken) => {
  const orgs = await getOrgs(accessToken);
  const org = await selectOrgCLI(orgs);
  return org.id;
};

const getOrgs = async (accessToken) => {
  const response = await partnersRequest(AllOrganizationsQuery, accessToken);
  const orgs = response.organizations.nodes;
  if (orgs.length === 0) {
    throw new Error(
      `---> There was a problem connecting to the org. Please check that the org exists and/or you have access. You can logout using\n npm run shopify auth logout`
    );
  }
  return orgs;
};

const selectOrgCLI = async (orgs) => {
  if (orgs.length === 1) {
    return orgs[0];
  }
  const orgList = orgs.map((org) => ({
    label: org.businessName,
    value: org.id,
    id: org.id,
  }));

  const choice = await renderSelectPrompt({
    message: "Select a Shopify Partner org for this app",
    choices: orgList,
  });

  return orgs.find((org) => org.id === choice);
};

const getApp = async (apiKey, accessToken) => {
  const response = await partnersRequest(FindAppQuery, accessToken, {
    apiKey,
  });
  return response.app;
};
const updateDashboardURLs = async (apiKey, appUrl) => {
  const accessToken = await ensureAuthenticatedPartners();

  const redirectURLs = appUrl.endsWith("/")
    ? [`${appUrl}api/auth/tokens`, `${appUrl}api/auth/callback`]
    : [`${appUrl}/api/auth/tokens`, `${appUrl}/api/auth/callback`];

  const urls = {
    applicationUrl: appUrl,
    redirectUrlWhitelist: redirectURLs,
  };

  const result = await partnersRequest(UpdateAppURLQuery, accessToken, {
    apiKey,
    ...urls,
  });
  if (result.appUpdate.userErrors.length > 0) {
    const errors = result.appUpdate.userErrors
      .map((error) => error.message)
      .join(", ");

    throw new Error(errors);
  }
};

console.warn("--> This is for use in DEV mode only");
console.log("--> Fetching Access Tokens");
const accessToken = await ensureAuthenticatedPartners();
console.log("--> Fetching Orgs");
await selectOrg(accessToken);
console.log("--> Fetching App Data");
const app = await getApp(process.env.SHOPIFY_API_KEY, accessToken);
console.log("--> Updating URLs");
await updateDashboardURLs(app.apiKey, process.env.SHOPIFY_APP_URL);
console.log("--> URLs updated. Please update GDPR and Proxy routes manually");
console.log("--> Done");

*/

throw new Error(
  "\n\n\n\n\n---> npm run update:url is now `npm run update:config`. Please refer to setup for more information. If you're not using managed auth, head into `_developer/updateDashboard.js` and uncomment the file\n\n\n\n\n"
);
