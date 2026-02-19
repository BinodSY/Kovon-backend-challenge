import * as jobRepository from "../repositories/job.repository.js";

export const createJobService = async (data: {
  title: string;
  country: string;
  minExperience: number;
  minLanguageScore: number;
}) => {
  return jobRepository.createJob(data);
};
