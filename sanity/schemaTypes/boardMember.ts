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
      type: 'string',
      title: 'Position',
options: {
  list: [
    { title: 'President', value: 'president' },
    { title: 'Internal VP', value: 'internal-vp' },
    { title: 'External VP', value: 'external-vp' },
    { title: 'Treasurer', value: 'treasurer' },
    { title: 'Webmaster', value: 'webmaster' },
    { title: 'Secretary', value: 'secretary' },
    { title: 'Events Coordinator', value: 'events-coordinator' },
    { title: 'Marketing Head', value: 'marketing-head' },
    { title: 'Advisor of Competition', value: 'advisor-of-competition' },
    { title: 'Faculty Advisor', value: 'faculty-advisor' }
  ]
},

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Profile Picture',
    }),
    defineField({
      name: 'linkedin',
      type: 'url',
      title: 'LinkedIn URL',
      validation: (Rule) =>
        Rule.required(),
    }),
    defineField({
      name: 'group',
      type: 'string',
      title: 'Group',
      options: {
        list: [
          { title: 'Executive', value: 'executive' },
          { title: 'Support', value: 'support' },
          { title: 'Advisory', value: 'advisory' },
        ],
      },
      validation: (Rule) => Rule.required(),
    })
  ],
})