import {defineField, defineType} from 'sanity'

enum DirectorCategories {
  President = 'President',
  VP = 'Vice President',
  Director = 'Director',
  Intern = 'Intern',
}

export default defineType({
  name: 'position',
  type: 'document',
  title: 'Positions',
  fields: [
    defineField({
      name: 'positionName',
      type: 'string',
      title: 'Position Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'positionCategory',
      type: 'string',
      title: 'Position Category',
      options: {
        list: [
          {title: DirectorCategories.President, value: DirectorCategories.President.toLowerCase()},
          {
            title: DirectorCategories.VP,
            value: DirectorCategories.VP.split(' ')
              .map((s) => s.toLowerCase())
              .join('-'),
          },
          {title: DirectorCategories.Director, value: DirectorCategories.Director.toLowerCase()},
          {title: DirectorCategories.Intern, value: DirectorCategories.Intern.toLowerCase()},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
