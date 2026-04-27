import { CollectionConfig } from 'payload'

export const SocialMedia: CollectionConfig = {
  slug: 'social-media',
  admin: {
    useAsTitle: 'platformName',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'platformName',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      required: true,
    },
    {
      name: 'iconName',
      type: 'text',
      required: true,
      admin: {
        description: 'Name of the Lucide React icon to use (e.g. "Instagram", "Youtube")',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
