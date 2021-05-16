import React from "react";
import { Page, Card, Stack, ButtonGroup, Button } from "@shopify/polaris";
import { useRouter } from "next/router";

const somethingCool = () => {
  const router = useRouter();
  return (
    <Page>
      <Card title="Something Cool">
        <Card.Section>
          <Stack spacing="loose" vertical>
            <p>
              I expected something cool to happen too, but you're better off
              building the future than to expect it.
            </p>
            <Stack distribution="trailing">
              <ButtonGroup>
                <Button onClick={() => console.log("B U I L D")}>
                  Build the future
                </Button>
                <Button plain onClick={() => router.push("/")}>
                  Back to home
                </Button>
              </ButtonGroup>
            </Stack>
          </Stack>
        </Card.Section>
      </Card>
    </Page>
  );
};

export default somethingCool;
