import type { Prisma } from "@prisma/client";
import { prisma } from "../utils/prisma.js";

export const createCandidate=async (data: Prisma.CandidateCreateInput)=>{
    return prisma.candidate.create({
        data,
    });
};