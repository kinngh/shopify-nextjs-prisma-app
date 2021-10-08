/*
  If you have multiple subscriptions running at the same time and using forEach on data array, be sure to pass the Key
  or react will throw a "no HTML was returned" error
*/

import React from "react";

const SubscriptionData = ({ error, loading, data }) => {
  if (error) return <p>{error.message}</p>;
  if (loading) return <p>Loading</p>;

  if (data) {
    const { id, name, status } =
      data.currentAppInstallation.activeSubscriptions[0];
    return (
      <React.Fragment>
        <p>
          <strong>Id:</strong> {id}
        </p>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Status:</strong> {status}
        </p>
      </React.Fragment>
    );
  }
};

export default SubscriptionData;
