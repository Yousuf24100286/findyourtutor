CREATE SCHEMA "findyourtutor";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "findyourtutor"."users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(256) NOT NULL,
	"password" varchar(256) NOT NULL,
	CONSTRAINT "users_id_unique" UNIQUE("id"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
