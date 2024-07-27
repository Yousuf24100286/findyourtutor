import 'dotenv/config'
import type { Config } from 'drizzle-kit'
import { connectionString } from './src/db/config'

const drizzleConfig = {
  schema: './src/db/schema.ts',
  out: './migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: connectionString,
  },
  verbose: true,
  strict: true,
} satisfies Config
export default drizzleConfig