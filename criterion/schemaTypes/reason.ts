import { Rule } from "sanity";

export const reason = {
  name: "reason",
  type: "document",
  title: "Reasons",
  fields: [
    {
      name: 'whyBuyInto',
      type: 'string',
      title: 'Why Buy Into',
      initialValue: 'Why Buy Into',
      readOnly: true,
      hidden: true,
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: "property",
      type: "string",
      title: "Property",
       description: "Name of the property",
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: "location",
      type: "string",
      title: "Location",
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: "reasons",
      type: "array",
      title: "Reasons",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "reasonIcon",
              type: "image",
              title: "Reason Icon",
              validation: (Rule: Rule) => Rule.required()
            },
            {
              name: "reasonTitle",
              type: "string",
              title: "Reason Title",
              validation: (Rule: Rule) => Rule.required()
            },
            {
              name: "reasonDescription",
              type: "string",
              title: "Reason Description",
              validation: (Rule: Rule) => Rule.required()
            }
          ],
        }
      ]
    },
  ],
   preview: {
    select: {
      property: "property",
      location: "location",
      reasonCount: "reasons"
    },
    prepare({ property, location, reasonCount }: { 
      property: string; 
      location: string; 
      reasonCount?: any[] 
    }) {
      const count = reasonCount?.length || 0;
      return {
        title: `Why Buy Into ${property}`,
        subtitle: `${location} • ${count} reason${count !== 1 ? 's' : ''}`
      };
    }
  }
};