import { CollectionConfig } from 'payload'

export const ContactMessages: CollectionConfig = {
  slug: 'contact-messages',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'serviceOfInterest', 'createdAt'],
  },
  access: {
    create: () => true, // Publicly accessible to create messages
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
    },
    {
      name: 'serviceOfInterest',
      type: 'select',
      options: [
        { label: 'Lintang Production', value: 'lintang_production' },
        { label: 'AM Lighting', value: 'am_lighting' },
        { label: 'Videotron', value: 'videotron' },
        { label: 'Lainnya', value: 'lainnya' },
      ],
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
  ],
}
