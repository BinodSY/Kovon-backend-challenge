import type { Prisma } from "@prisma/client";
import { prisma } from "../utils/prisma.js";

export const createJob=async (data: Prisma.JobCreateInput)=>{
    return prisma.job.create({
        data,
    });
}