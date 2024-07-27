ALTER TABLE "findyourtutor"."users" RENAME TO "account";--> statement-breakpoint
ALTER TABLE "findyourtutor"."account" DROP CONSTRAINT "users_id_unique";--> statement-breakpoint
ALTER TABLE "findyourtutor"."account" DROP CONSTRAINT "users_email_unique";--> statement-breakpoint
ALTER TABLE "findyourtutor"."account" ADD COLUMN "role" varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE "findyourtutor"."account" ADD COLUMN "group" varchar(256) NOT NULL;--> statement-breakpoint
ALTER TABLE "findyourtutor"."account" ADD COLUMN "is_verified" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "findyourtutor"."account" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "findyourtutor"."account" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "findyourtutor"."account" ADD CONSTRAINT "account_id_unique" UNIQUE("id");--> statement-breakpoint
ALTER TABLE "findyourtutor"."account" ADD CONSTRAINT "account_email_unique" UNIQUE("email");