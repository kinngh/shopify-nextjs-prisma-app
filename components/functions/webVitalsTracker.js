const webVitalsTracker = async (metrics) => {
  await fetch("/api/apps/metrics", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(metrics),
  });
};

export default webVitalsTracker;
