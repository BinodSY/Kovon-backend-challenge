
import * as candidateRepository from "../repositories/candidate.repository.js"
import { verificationBreaker } from "../utils/circuitBreaker.js";

export const createCandidateService=async(data:{
    name: string;
    skill: string;
    experience: number;
    languageScore: number;
    documentsVerified: boolean;

})=>{
    const result= await verificationBreaker.fire();

     return candidateRepository.createCandidate({
    ...data,
    documentsVerified: result.verified
    });
}