import { pgSchema, PgSchema, serial, timestamp, varchar, boolean } from "drizzle-orm/pg-core";

export const schema: PgSchema = pgSchema('findyourtutor')

export const account = schema.table("account", {
  id: serial("id").primaryKey().unique().notNull(),
  email: varchar("email", { length: 256 }).notNull().unique(),
  password: varchar("password", { length: 256 }).notNull(),
  role: varchar("role", { length: 256 }).notNull(),
  group: varchar("group", { length: 256 }).notNull(),
  is_verified: boolean("is_verified").notNull().default(false),
  created_at: timestamp("created_at").notNull().defaultNow(),
  updated_at: timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date())
})