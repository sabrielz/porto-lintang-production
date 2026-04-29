import { GlobalConfig } from 'payload'

export const SEO: GlobalConfig = {
  slug: 'seo',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'metaTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'metaDescription',
      type: 'text',
      required: true,
    },
    {
      name: 'ogImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
