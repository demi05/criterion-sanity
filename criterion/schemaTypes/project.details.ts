import { Rule } from 'sanity'

export const propertyDetails = {
  name: 'propertyDetails',
  type: 'document',
  title: 'Project Details',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'info',
      type: 'string',
      title: 'Brief Info',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Project Detail Image',
    },
    {
      name: 'propertyDetailHeaders',
      type: 'array',
      title: 'Project Detail Headers',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Header Item',
              validation: (Rule: Rule) => Rule.required()
            },
            {
              name: 'description',
              type: 'string',
              title: 'Header Item Description',
              validation: (Rule: Rule) => Rule.required()
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description'
            }
          }
        }
      ]
    },
    {
      name: 'propertyDetailDescriptions',
      type: 'array',
      title: 'Project Detail Descriptions',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
              validation: (Rule: Rule) => Rule.required()
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description',
              validation: (Rule: Rule) => Rule.required()
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description'
            },
          }
        }
      ]
    },
  ]
};