const SessionModel = require("../models/SessionModel.js");
const { Shopify } = require("@shopify/shopify-api");

const storeCallback = async (session) => {
  const result = await SessionModel.findOne({ id: session.id });

  if (result === null) {
    await SessionModel.create({
      id: session.id,
      content: JSON.stringify(session),
    });
  } else {
    await SessionModel.findOneAndUpdate(
      { id: session.id },
      {
        content: JSON.stringify(session),
      }
    );
  }

  return true;
};

const loadCallback = async (id) => {
  const sessionResult = await SessionModel.findOne({ id });
  if (sessionResult.content.length > 0) {
    return JSON.parse(sessionResult.content);
  }
  return undefined;
};

const deleteCallback = async (id) => {
  await SessionModel.deleteOne({ id });
  return true;
};

const sessionStorage = new Shopify.Session.CustomSessionStorage(
  storeCallback,
  loadCallback,
  deleteCallback
);

module.exports = sessionStorage;
