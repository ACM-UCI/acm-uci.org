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
            name: "url",
            title: "URL",
            type: "url",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "quarter",
            title: "Quarter",
            type: "string",
            options: {
                list: [
                    {title: "Fall", value: "0"},
                    {title: "Winter", value: "1"},
                    {title: "Spring", value: "2"}
                ]
            },
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "week",
            title: "Week",
            type: "number",
            options: {
                list: [...Array(8).keys()].map(i => i+1)
            },
            validation: (Rule) => Rule.required()
        })
    ]
})