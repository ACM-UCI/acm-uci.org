import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'boardMember',
  type: 'document',
  title: 'Board Members',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      type: 'reference',
      title: 'Position',
      to: {
        type: 'position',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isActive',
      type: 'boolean',
      title: 'Active',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Profile Picture',
    }),
  ],
})
