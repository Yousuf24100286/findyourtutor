import 'dotenv/config'
import pg from 'pg'
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from './schema'
import { connectionString } from './config';

const client = new pg.Pool({
  connectionString: connectionString
})
const sql = drizzle(client, {
  schema: schema
})

const db = (() => {
  let promise: Promise<pg.PoolClient> | undefined = client.connect() ;
  const start = () => promise = client.connect()
  const stop = () => client.end().then(() => promise = undefined)
  return { start, stop, promise }
})()

export { sql, db, schema, connectionString }