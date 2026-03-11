-- CreateEnum
CREATE TYPE "EmployerDocumentStatus" AS ENUM ('PENDING', 'VERIFIED', 'REJECTED');

-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('BUSINESS_LICENSE', 'COMPANY_REGISTRATION', 'TAX_CERTIFICATE');

-- CreateTable
CREATE TABLE "Employer" (
    "id" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "registrationNumber" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Employer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployerDocument" (
    "id" TEXT NOT NULL,
    "employerId" TEXT NOT NULL,
    "documentType" "DocumentType" NOT NULL,
    "documentUrl" TEXT NOT NULL,
    "status" "EmployerDocumentStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "EmployerDocument_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employer_email_key" ON "Employer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Employer_registrationNumber_key" ON "Employer"("registrationNumber");

-- CreateIndex
CREATE INDEX "EmployerDocument_employerId_idx" ON "EmployerDocument"("employerId");

-- AddForeignKey
ALTER TABLE "EmployerDocument" ADD CONSTRAINT "EmployerDocument_employerId_fkey" FOREIGN KEY ("employerId") REFERENCES "Employer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
