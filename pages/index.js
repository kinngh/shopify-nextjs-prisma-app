import React from "react";
import { useRouter } from "next/router";
import { EmptyState, Card } from "@shopify/polaris";

const Index = () => {
  const router = useRouter();
  return (
    <Card sectioned>
      <EmptyState
        heading="Home of something cool"
        action={{
          content: "Build Something",
          onAction: () => {
            router.push("/somethingCool");
          },
        }}
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      ></EmptyState>
    </Card>
  );
};

export default Index;
