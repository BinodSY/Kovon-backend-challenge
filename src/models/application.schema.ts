import { z } from "zod";

export const createApplicationSchema = z.object({
  candidateId: z.string().uuid(),
  jobId: z.string().uuid(),
});
