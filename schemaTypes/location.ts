import { defineField } from "sanity";

const location = {
  name: "location",
  title: "Location",
  type: "document",
  fields: [
    defineField({
      name: "Name",
      type: "string",
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "object",
      fields: [
        { name: "url", type: "url", title: "URL" },
        { name: "file", type: "file", title: "File" },
      ],
      validation: (Rule) => Rule.required().error("Cover Image is required"),
    }),
  ],
};

export default location;
