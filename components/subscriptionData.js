import React from "react";
const SubscriptionData = ({ error, loading, data }) => {
  if (error) return <p>{error.message}</p>;
  if (loading) return <p>Loading</p>;
  console.log(data);
  return (
    <p>
      Check your console for current active app subscriptions. This is a
      temporary placeholder page while subscription routing is being tested
    </p>
  );
};

export default SubscriptionData;
