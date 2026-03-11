import type { Prisma } from "@prisma/client";
import { prisma } from "../utils/prisma.js";

export const createJob=async (data: Prisma.JobCreateInput)=>{
    return prisma.job.create({
        data,
    });
}


export const findAllJobs=async (limit:number,page:number)=>{
    const skip=page>0?page:1;
    limit=Math.min(limit || 10,50);

    return prisma.job.findMany({
        skip:skip,
        take:limit,
        orderBy:{
            createdAt:"desc"
        }
    });
}

export const findJobById=async (id:string)=>{
    return prisma.job.findUnique({
        where:{id},
    });
}

export const updateJob=async (id:string,data:Prisma.JobUpdateInput)=>{
    return prisma.job.update({
        where:{id},
        data,
    });
}

export const deleteJob=async (id:string)=>{
    return prisma.job.delete({
        where:{id},
    });
}