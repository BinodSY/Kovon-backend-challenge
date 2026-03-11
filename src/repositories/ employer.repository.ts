import type { Prisma } from "@prisma/client";
import { prisma } from "../utils/prisma.js";



export const createEmployer=async (data: Prisma.EmployerCreateInput)=>{
    return prisma.employer.create({
        data,
    });
}

export const findEmployerWithDocuments = async (employerId: string) => {
  return prisma.employer.findUnique({
    where: { id: employerId },
    include: {
      documents: true
    }
  });
};

export const markEmployerVerified = async (employerId: string) => {
  return prisma.employer.update({
    where: { id: employerId },
    data: {
      verified: true
    }
  });
};