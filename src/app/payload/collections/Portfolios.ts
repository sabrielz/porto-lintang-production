import { CollectionConfig } from 'payload'

export const Portfolios: CollectionConfig = {
  slug: 'portfolios',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Live Streaming', value: 'live_streaming' },
        { label: 'Lighting', value: 'lighting' },
        { label: 'Videotron', value: 'videotron' },
        { label: 'Animation', value: 'animation' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'youtubeUrl',
      type: 'text',
      admin: {
        description: 'Optional YouTube embed URL for this portfolio item.',
      },
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'eventDate',
      type: 'date',
      required: true,
    },
    {
      name: 'clientName',
      type: 'text',
      admin: {
        position: 'sidebar',
        description: 'Name of the client or company.'
      }
    },
    {
      name: 'equipmentUsed',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
        }
      ],
      admin: {
        description: 'List of key equipment used.',
      }
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        }
      ],
      admin: {
        description: 'Optional additional images for the portfolio item.',
      }
    },
    {
      name: 'testimonial',
      type: 'richText',
      admin: {
        description: 'Optional testimonial or quote from the client.',
      }
    },
  ],
}
