import { pgSchema, PgSchema, serial, varchar } from "drizzle-orm/pg-core";

export const schema: PgSchema = pgSchema('findyourtutor')

export const users = schema.table("users", {
  id: serial("id").primaryKey().unique().notNull(),
  email: varchar("email", { length: 256 }).notNull().unique(),
  password: varchar("password", { length: 256 }).notNull(),
})