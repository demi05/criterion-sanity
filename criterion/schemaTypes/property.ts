import { Rule } from 'sanity'

export const property = {
  name: 'property',
  type: 'document',
  title: 'Property',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'overview',
      title: 'Overview of the property',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'}
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'}
            ],
          }
        },
      ],
      validation: (Rule: Rule) => Rule.required()
    },
  ]
};