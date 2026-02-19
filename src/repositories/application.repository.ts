import { prisma } from "../utils/prisma.js";
import { ApplicationStatus } from "@prisma/client";

export const findCandidateById = async (id: string) => {
  return prisma.candidate.findUnique({
    where: { id },
  });
};

export const findJobById = async (id: string) => {
  return prisma.job.findUnique({
    where: { id },
  });
};

export const findExistingApplication = async (
  candidateId: string,
  jobId: string
    ) => {
  return prisma.application.findUnique({
    where: {
      candidateId_jobId: {
        candidateId,
        jobId,
      },
    },
  });
};

export const createApplication = async (data: {
  candidateId: string;
  jobId: string;
  eligibilityScore: number;
  status: ApplicationStatus;
}) => {
  return prisma.application.create({
    data,
  });
};


export const findApplicationsByJobId = async (jobId: string) => {
  return prisma.application.findMany({
    where: { jobId },
    include: {
      candidate: true,
    },
  });
};

export const findApplicationById = async (id: string) => {
  return prisma.application.findUnique({
    where: { id },
  });
};

export const shortlistApplicationIfEligible = async (
  id: string
) => {
  const result = await prisma.application.updateMany({
    where: {
      id,
      status: ApplicationStatus.ELIGIBLE,
    },
    data: {
      status: ApplicationStatus.SHORTLISTED,
    },
  });

  return result;
};

