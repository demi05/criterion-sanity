import { Rule, validation } from "sanity";
//need to have unit as an identifier

export const floorPlan = {
  name: "floorPlan",
  type: "document",
  title: "Floor Plan",
  fields: [
    {
      name: "unit",
      type: "string",
      title: "Unit",
      description: "Optional unit identifier"
      //  validation: (Rule: Rule) => Rule.required()
    },
    {
      name: "floor",
      type: "string",
      title: "Floor",
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: "floorDetails",
      type: "array",
      title: "Floor Details",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Floor Detail Item",
              validation: (Rule: Rule) => Rule.required()
            }
          ]
        }
      ]
    },
    {name: "floorPlanImage", type: "image", title: "Floor Plan Image", validation: (Rule: Rule) => Rule.required()
    }
  ],
  preview: {
    select: {
      unit: "unit",
      floor: "floor",
      media: "floorPlanImage"
    },
    prepare({ unit, floor, media }: { unit?: string; floor: string; media: any }) {
      return {
        title: unit ? `${unit} - ${floor}` : floor,
        subtitle: unit ? `Floor: ${floor}` : "Floor Plan",
        media: media
      };
    }
  }
};