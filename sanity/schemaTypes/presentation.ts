import { defineField, defineType } from "sanity";

export default defineType({
    name: "presentation",
    title: "Presentations",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "url",
            title: "URL",
            type: "url",
            validation: (Rule) => Rule.required()
        }),
            defineField({
      name: 'image',
      type: 'image',
      title: 'Slide Preview Image',
    }),
        defineField({
            name: "quarter",
            title: "Quarter",
            type: "string",
            options: {
                list: [
                    { title: "Fall", value: "0" },
                    { title: "Winter", value: "1" },
                    { title: "Spring", value: "2" }
                ]
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "week",
            title: "Week",
            type: "number",
            options: {
                list: [...Array(10).keys()].map(i => i + 1)
            },
            validation: (Rule) => Rule.required()
        })
    ]
})