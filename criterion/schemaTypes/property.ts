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
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input: string) => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 96)
      },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'structureType',
      type: 'string',
      title: 'Structure Type',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'bedrooms',
      type: 'number',
      title: 'Bedrooms',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'floors',
      type: 'number',
      title: 'Floors',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'area',
      type: 'number',
      title: 'Area (in m²)',
    },
    {
      name: 'description',
      title: 'Description of the property',
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
    {
      name: 'projectDetails',
      type: 'array',
      title: 'Project Details',
      of: [{ type: 'reference', to: [{ type: 'propertyDetails' }] }],
    },
    {
      name: 'locationDetails',
      type: 'array',
      title: 'Location Details',
      of: [
        {
          type: 'object',
          fields:[
            {
              name: 'location',
              type: 'string',
              title: 'Title Location',
              validation: (Rule: Rule) => Rule.required()
            },
            {
              name: 'info',
              type: 'string',
              title: 'Brief Info',
            },
            {
              name: 'description',
              title: 'Description of the location',
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
            {
              name: 'map',
              type: 'string',
              title: 'Map Embed Link',
            },
          ],
          preview: {
            select: {
              title: 'location',
              subtitle: 'info'
            }
          }
        },
      ]
    },
     {
      name: 'floorPlan',
      type: 'array',
      title: 'Floor Plan',
      of: [{ type: 'reference', to: [{ type: "floorPlan" }] }],
    },
    {
      name: "reason",
      type: "array",
      title:"Reason",
      of: [{ type: "reference", to: [{ type: "reason" }] }],
    },
    {
      name: "pricing",
      type: "array",
      title:"Pricing",
      of: [{ type: "reference", to: [{ type: "pricing" }] }],
    }
  ]
};