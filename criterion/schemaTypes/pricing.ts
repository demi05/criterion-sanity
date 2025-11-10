import { Rule } from "sanity";

export const pricing = {
  name: "pricing",
  type: "document",
  title: "Pricing & Payment Plan",
  fields: [
    {
      name: "property",
      type: "reference",
      title: "Property",
      to: [{ type: "property" }],
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: "milestones",
      type: "array",
      title: "Payment Milestones",
      description: "Construction milestones with payment details",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "milestone",
              type: "string",
              title: "Milestone",
              description: "e.g., Foundation, 1st Floor Slab, etc.",
              validation: (Rule: Rule) => Rule.required()
            },
            {
              name: "percentage",
              type: "number",
              title: "Payment Percentage",
              description: "e.g., 20 for 20%",
              validation: (Rule: Rule) => 
                Rule.required()
                  .min(0)
                  .max(100)
                  .positive()
            },
            {
              name: "installmentNumber",
              type: "number",
              title: "Installment Number",
              description: "e.g., 1 for 1st installment",
              validation: (Rule: Rule) => Rule.required().positive().integer()
            },
            {
              name: "amount",
              type: "number",
              title: "Amount (₦)",
              description: "Payment amount in Naira",
              validation: (Rule: Rule) => Rule.required().positive()
            },
            {
              name: "timeline",
              type: "string",
              title: "Timeline",
              description: "e.g., After 8 Weeks of starting, After 8 Weeks",
              validation: (Rule: Rule) => Rule.required()
            }
          ],
          preview: {
            select: {
              milestone: "milestone",
              percentage: "percentage",
              installment: "installmentNumber",
              amount: "amount"
            },
            prepare({ milestone, percentage, installment, amount }: { 
              milestone: string; 
              percentage: number;
              installment: number;
              amount: number;
            }) {
              return {
                title: milestone,
                subtitle: `${percentage}% - ${installment}${installment === 1 ? 'st' : installment === 2 ? 'nd' : installment === 3 ? 'rd' : 'th'} Installment | ₦${amount.toLocaleString()}`
              };
            }
          }
        }
      ],
      validation: (Rule: Rule) => Rule.required().min(1)
    },
    {
      name: "projectCompletion",
      type: "object",
      title: "Project Completion",
      fields: [
        {
          name: "timeline",
          type: "string",
          title: "Completion Timeline",
          description: "e.g., 10TH MONTH",
          validation: (Rule: Rule) => Rule.required()
        }
      ]
    },
    {
      name: "projectHandover",
      type: "object",
      title: "Project Handover",
      fields: [
        {
          name: "timeline",
          type: "string",
          title: "Handover Timeline",
          description: "e.g., 12TH MONTH",
          validation: (Rule: Rule) => Rule.required()
        }
      ]
    },
    // {
    //   name: "contactInfo",
    //   type: "object",
    //   title: "Contact Information",
    //   fields: [
    //     {
    //       name: "companyName",
    //       type: "string",
    //       title: "Company Name",
    //       initialValue: "CRITERION HOMES",
    //       validation: (Rule: Rule) => Rule.required()
    //     },
    //     {
    //       name: "phoneNumber",
    //       type: "string",
    //       title: "Phone Number",
    //       description: "Format: +234 XXX XXX XXXX",
    //       validation: (Rule: Rule) => Rule.required()
    //     },
    //     {
    //       name: "ctaText",
    //       type: "string",
    //       title: "Call-to-Action Text",
    //       initialValue: "TALK TO US",
    //       validation: (Rule: Rule) => Rule.required()
    //     }
    //   ]
    // }
  ],
  preview: {
    select: {
      property: "property.title",
      milestoneCount: "milestones",
      completion: "projectCompletion.timeline"
    },
    prepare({ property, milestoneCount, completion }: { 
      property?: string; 
      milestoneCount?: any[];
      completion?: string;
    }) {
      const count = milestoneCount?.length || 0;
      return {
        title: `Payment Plan - ${property || 'Untitled Property'}`,
        subtitle: `${count} milestone${count !== 1 ? 's' : ''} • Completion: ${completion || 'Not set'}`
      };
    }
  }
};