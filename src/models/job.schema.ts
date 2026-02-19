import { z } from "zod";

export const createJobSchema=z.object({
    title:z.string().min(1),
    country:z.string().min(1),
    minExperience: z.number().int().min(0),
    minLanguageScore: z.number().min(0).max(100),
})