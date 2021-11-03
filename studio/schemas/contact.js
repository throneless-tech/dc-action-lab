export default {
  name: "contact",
  title: "Contact form submissions",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "organization",
      title: "Organization",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "inquiry",
      title: "Inquiry",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: "email",
    },
  },
};
