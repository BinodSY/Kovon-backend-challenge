
import { createEmployer} from "../repositories/ employer.repository.js";

export const createEmployerService=async(data:{
    companyName:string;
    email:string;
    country:string;
    registrationNumber:string;
    verified:boolean;
})=>{
    return createEmployer(data);
}



