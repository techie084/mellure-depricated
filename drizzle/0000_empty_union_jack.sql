CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"name" text,
	"email_verified" integer,
	"image" text,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
