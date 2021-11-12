export default {
  type: "object",
  name: "carousel",
  title: "Carousel section",
  fields: [
    {
      type: "string",
      name: "previewText",
      title: "CMS preview text",
      description:
        "A short reminder of what this section has to show in the preview on this CMS platform",
      validation: null,
    },
    {
      name: "slides",
      title: "Slides",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "testimonial_text",
              title: "Testimonial text",
            },
            {
              type: "string",
              name: "testimonial_giver",
              title: "Testimonial giver",
            },
          ],
        },
      ],
    },
    {
      type: "string",
      name: "background_color",
      title: "Background color",
      description: "The background color of the section",
      initialValue: "none",
      validation: null,
      options: {
        list: ["none", "primary", "secondary"],
      },
    },
    {
      type: "string",
      name: "align",
      title: "Feature alignment",
      description: "The horizontal alignment of the feature content",
      initialValue: "left",
      validation: null,
      options: {
        list: ["left", "right", "center"],
      },
    },
    {
      type: "string",
      name: "type",
      title: "Object Type",
      description: "The type of the object",
      hidden: false,
      validation: (Rule) => Rule.required(),
      options: {
        list: ["carousel"],
      },
    },
    {
      type: "string",
      name: "stackbit_model_type",
      title: "Stackbit Model Type",
      description: "Stackbit model type",
      hidden: false,
      validation: (Rule) => Rule.required(),
      options: {
        list: ["object"],
      },
    },
  ],
  preview: {
    select: {
      title: "previewText",
    },
  },
};