import {z} from "zod";

const employeerSchema = z.object({
    companyName: z.string().min(1, "Name is required"),
    email: z.email("Invalid email address"),
    country: z.string().min(1, "Position is required"),
    registrationNumber: z.string().min(8, "Minimum 8 charcters required"),
    verified:z.boolean(),
});

export default employeerSchema;