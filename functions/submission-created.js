const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_ACCESS_TOKEN,
  useCDN: false,
});

exports.handler = async function (event, context, callback) {
  const { payload } = JSON.parse(event.body);

  const isContactForm = payload.data.formId === "contact-form";

  // Build the document JSON and submit it to SANITY
  if (isContactForm) {
    const contact = {
      _type: "contact", // must match the name of the contact document type on the Sanity schema
      name: payload.data.name,
      email: payload.data.email,
      phone: payload.data.phone,
      organization: payload.data.organization,
      inquiry: payload.data.inquiry
    };

    const result = await client
      .create(contact)
      .catch((err) => console.log(err));
  }

  callback(null, {
    statusCode: 200,
  });
};
