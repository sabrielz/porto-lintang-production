import { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heroHeadline',
      type: 'text',
      required: true,
    },
    {
      name: 'heroSubheadline',
      type: 'text',
      required: true,
    },
    {
      name: 'githubRepoUrl',
      type: 'text',
    },
  ],
}
