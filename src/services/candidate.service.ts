import * as candidateRepository from "../repositories/candidate.repository.js"

export const createCandidateService=async(data:{
    name: string;
    skill: string;
    experience: number;
    languageScore: number;
    documentsVerified: boolean;

})=>{
    return candidateRepository.createCandidate(data);
}