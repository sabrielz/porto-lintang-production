import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './src/app/payload/collections/Users'
import { Media } from './src/app/payload/collections/Media'
import { Portfolios } from './src/app/payload/collections/Portfolios'
import { SocialMedia } from './src/app/payload/collections/SocialMedia'
import { Partners } from './src/app/payload/collections/Partners'
import { SiteSettings } from './src/app/payload/globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname, 'src/app/(payload)/admin'),
    },
  },
  collections: [
    Users,
    Media,
    Portfolios,
    SocialMedia,
    Partners
  ],
  globals: [
    SiteSettings
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'YOUR_PAYLOAD_SECRET_KEY',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./payload.db',
      authToken: process.env.DATABASE_AUTH_TOKEN, // Example for remote Turso DB
    },
  }),
})
