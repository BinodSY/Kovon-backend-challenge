import { z } from "zod";

export const createCandidateSchema = z.object({
    name: z.string().min(1),
    skill: z.string().min(1),
    experience:z.number().int().min(0),
    languageScore :z.number().min(0).max(100),
    documentsVerified: z.boolean(),
});