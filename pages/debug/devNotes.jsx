import { useAppBridge } from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";
import { Layout, LegacyCard, Link, Page } from "@shopify/polaris";
import { useRouter } from "next/router";

const DevNotes = () => {
  const router = useRouter();
  const app = useAppBridge();
  const redirect = Redirect.create(app);
  return (
    <>
      <Page
        title="Developer Notes"
        subtitle=""
        backAction={{ content: "Home", onAction: () => router.push("/debug") }}
      >
        <Layout>
          <Layout.Section>
            <LegacyCard title="Notes">
              <LegacyCard.Section title="Creating Extensions">
                <li>
                  Run <code>npm run s:e:create</code> to create an extension and{" "}
                  <code>npm run s:e:deploy</code> to deploy said extension.
                </li>
                <li>
                  If you get a message around "Invalid React hooks called" while
                  deploying your extension, first run <code>npm ls react</code>{" "}
                  and see if it throws any errors. If it doesn't, delete{" "}
                  <code>package-lock.json</code> and <code>node_modules</code>{" "}
                  and run <code>npm install --force</code> and the issue should
                  be fixed. If you do get an error when you run{" "}
                  <code>npm ls react</code>, override the dependency in the{" "}
                  <code>overrides</code> area in <code>package.json</code> or
                  downgrade <code>React</code> to <code>17.x.x</code>.
                </li>
              </LegacyCard.Section>
              <LegacyCard.Section title="Creating GraphQL and REST Clients">
                <li>
                  Starting <code>Shopify API v6</code>, client providers require
                  an additional few lines of setup. To avoid that, there's a new
                  provider available at <code>./utils/clientProvider.js</code>{" "}
                </li>
                <li>
                  Import <code>clientProvider</code> and pass it the{" "}
                  <code>req</code> and <code>res</code> objects, along with an{" "}
                  <code>isOnline</code> Boolean value for using online / offline
                  tokens.
                </li>
                <li>
                  The <code>clientProvider</code> returns
                  <code>client, shop and session</code> as a single object, so
                  you can destructure around your need.
                </li>
                <li>
                  Examples can be found in <code>./server/routes/index.js</code>
                </li>
              </LegacyCard.Section>
              <LegacyCard.Section title="Opening Issues and Asking for Help">
                <p>
                  The idea behind creating the repo was to make it easier for
                  you to get started with Shopify app dev and/or understand how
                  to implement Auth, Webhooks, GDPR routes, etc. that come
                  pre-setup with this repo, and is production ready. Before
                  asking for help, please remember:
                </p>
                <br />
                <li>
                  The maintainers will help you with setting up the boilerplate
                  and/or pointing you in the right direction. They are NOT
                  someone you can demand to work on your app if you can't pay
                  for their time.
                </li>
                <li>
                  If you're stuck understanding how to build on Shopify, please
                  read docs and search the internet before asking for help.
                </li>
                <li>
                  <strong>
                    It is OK to message the maintainers as long as you're being
                    civil about it - we do open source because we enjoy working
                    with engineers and building things. Please don't ruin it for
                    us.
                  </strong>
                </li>
              </LegacyCard.Section>
              <LegacyCard.Section>
                <p>
                  To have other common issues added here,{" "}
                  <Link
                    onClick={() => {
                      redirect.dispatch(Redirect.Action.REMOTE, {
                        url: "https://github.com/kinngh/shopify-nextjs-prisma-app/discussions/new/choose",
                        newContext: true,
                      });
                    }}
                  >
                    start a discussion{" "}
                  </Link>{" "}
                  here
                </p>
              </LegacyCard.Section>
            </LegacyCard>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
};

export default DevNotes;
