
export const verifyDocument=async()=>{
    //I am developing this document to simulate a third party integration and server down issue
    const randomnNumber=Math.random()<0.2;
    if(randomnNumber){
        throw new Error("External Verification Service Down")
    }

    return {
    verified: true
  };
}