import {defineArrayMember, defineField, defineType} from 'sanity'

const quarters = ['Fall', 'Winter', 'Spring']
const numbers = [1,2,3,4,5,6,7,8,9,10]

export default defineType({
  name: 'weeklyProblem',
  type: 'document',
  title: 'Weekly Problems',
  fields: [
    defineField({
      name: 'year',
      type: 'number',
      title: 'Year',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quarter',
      type: 'string',
      title: 'Quarter',
      options: {
        list: [
          {title: 'Fall', value: '0'},
          {title: 'Winter', value: '1'},
          {title: 'Spring', value: '2'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
      ...numbers.map((week) =>
      defineField({
        name: `week${week}`,
        type: 'array',
        of: [
          defineArrayMember({
            type: 'reference',
            to: {
              type: 'problem',
            },
          }),
        ],
      })
    ),

  ],
    preview: {
    select: {
      year: 'year',
      quarter: 'quarter',
    },
    prepare({year, quarter}) {
      return {title: `${quarters[parseInt(quarter)]} ${year}`}
    },
  },

})