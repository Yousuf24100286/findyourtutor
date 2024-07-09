import 'dotenv/config'

export const connectionString = process.env.DATABASE_URL ? process.env.DATABASE_URL : (() => { throw new Error('DATABASE_URL environment variable not set!') })()
