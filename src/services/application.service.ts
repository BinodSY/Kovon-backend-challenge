import * as applicationRepository from "../repositories/application.repository.js";
import { ApplicationStatus } from "@prisma/client";


function calculateEligibilityScore(
    experience: number,
    languageScore: number,
    documentsVerified: boolean
): number{
    return (
        experience*2+
        languageScore/10+
        (documentsVerified?10:0)
    );
};

function determineStatus(
    candidate:any,
    job:any
):ApplicationStatus{
    const isEligible=
    candidate.experience >= job.minExperience &&
    candidate.languageScore >= job.minLanguageScore &&
    candidate.documentsVerified;

    return isEligible ? ApplicationStatus.ELIGIBLE : ApplicationStatus.REJECTED;
}

export const createApplicationService=async(
    candidateId:string,
    jobId:string
    )=>{
    const candidate=await applicationRepository.findCandidateById(candidateId);
    if(!candidate){
        throw new Error("Candidate not found");
    }

    const job = await applicationRepository.findJobById(jobId);
    if (!job) {
        throw new Error("Job not found");
    }

    const existing = await applicationRepository.findExistingApplication(
    candidateId,
    jobId
    );

        if (existing) {
            throw new Error("Candidate already applied to this job");
        }

    //calculate eligibility score
     const eligibilityScore = calculateEligibilityScore(
        candidate.experience,
        candidate.languageScore,
        candidate.documentsVerified
    );
    //determine status
    const status = determineStatus(candidate, job);

    return applicationRepository.createApplication({
    candidateId,
    jobId,
    eligibilityScore,
    status,
  });
};