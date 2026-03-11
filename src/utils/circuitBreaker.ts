import CircuitBreaker from "opossum";
import { verifyDocument } from "../services/documentVerification.service.js";

const options={
    timeout:3000,
    errorThresholdPercentage: 50,
    resetTimeout: 10000
}

export const verificationBreaker=new CircuitBreaker(verifyDocument,options);
verificationBreaker.fallback(() => {
  return {
    verified: false,
    fallback: true
  };
});