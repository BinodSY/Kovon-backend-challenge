# Kovon-backend-challenge

Small backend service for candidate / job applications using Node, TypeScript and Prisma (Postgres).

## Requirements

- Node 18+ (or compatible)
- Docker & Docker Compose (for running Postgres locally)
- npm (or yarn)

## Quickstart (recommended: Docker) this is with docker 

1. Start services (Postgres + app):

```bash
docker compose up --build
```
##go to this site after running the app to checkout the api end points
```
http://localhost:3000/api-docs/
```
2. The API will be available on the port configured in the compose file (default project settings).

## Local development (without Docker compose)

1. Create a `.env` at the project root with at least the `DATABASE_URL` value. Example:

```
DATABASE_URL=postgresql://kovon:password@localhost:5432/kovon_db?schema=public
```

2. Install dependencies:

```bash
npm install
```

3. Generate Prisma client and run migrations (development):

```bash
npm run prisma:generate
npm run prisma:migrate
```

4. Run the app in dev mode:

```bash
npm run dev
```

Notes:
- To run migrations in production use `npx prisma migrate deploy`.
- The repo includes `docker-compose.yml` which will create the DB and run the app when using `docker compose up`.

## Database schema (Prisma)

The application uses Prisma with the following schema (excerpt from `prisma/schema.prisma`):

```prisma
generator client {
	provider = "prisma-client-js"  
  
}

datasource db {
	provider = "postgresql"
}


model Candidate{
	id                  String  @id @default(uuid())
	name                String 
	skill               String
	experience          Int 
	languageScore       Int
	documentsVerified   Boolean
	createdAt           DateTime @default(now())
	applications        Application[]

}

model Job {
	id                String   @id @default(uuid())
	title             String
	country           String
	minExperience     Int
	minLanguageScore  Int
	createdAt         DateTime @default(now())

	applications      Application[]
}

model Application {
	id               String   @id @default(uuid())
	candidateId      String
	jobId            String
	eligibilityScore Float
	status           ApplicationStatus
	createdAt        DateTime @default(now())

	candidate        Candidate @relation(fields: [candidateId], references: [id])
	job              Job       @relation(fields: [jobId], references: [id])

	@@unique([candidateId, jobId])
}

enum ApplicationStatus {
	ELIGIBLE
	REJECTED
	SHORTLISTED
}

```

## Architecture overview

High level structure (source in `src/`):

- `app.ts` — application entry, middleware and route registration.
- `routes/` — express route definitions; maps HTTP endpoints to controllers.
- `controllers/` — thin controllers handling requests/responses and validation.
- `services/` — business logic (eligibility score calculation, orchestration).
- `repositories/` — data access layer using Prisma client (CRUD operations).
- `models/` — request/response schemas (Zod validators).
- `middlewares/` — shared middleware (validation, error handling).
- `utils/prisma.ts` — Prisma client instance.
- `swagger/` and `config/swagger.ts` — OpenAPI docs generation and route export.

Request flow:

`HTTP -> routes -> controllers -> services -> repositories -> Prisma(DB)`

This separation keeps controllers thin and places logic in services, while repositories isolate DB access.

## Useful scripts

- `npm run dev` — run the app with `tsx` (development)
- `npm run build` — compile TypeScript
- `npm run start` — run compiled app
- `npm run prisma:generate` — generate Prisma client
- `npm run prisma:migrate` — run Prisma migrations in dev

---
