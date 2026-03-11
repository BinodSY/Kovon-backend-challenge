
import { EmployerDocumentStatus } from "@prisma/client";
import { findEmployerWithDocuments, markEmployerVerified } from "../repositories/ employer.repository.js";




export const verifyEmployer = async (employerId: string) => {

  const employer = await findEmployerWithDocuments(employerId);

  if (!employer) {
    throw new Error("Employer not found");
  }

  if (employer.documents.length === 0) {
    throw new Error("No documents uploaded");
  }

  const allDocsVerified = employer.documents.every(
    (doc) => doc.status === EmployerDocumentStatus.VERIFIED
  );

  if (!allDocsVerified) {
    throw new Error("All documents must be verified first");
  }

  const updatedEmployer = await markEmployerVerified(employerId);

  return updatedEmployer;
};