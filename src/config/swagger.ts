import swaggerJSDoc from "swagger-jsdoc";
import type { Options } from "swagger-jsdoc";

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Kovon Backend API",
      version: "1.0.0",
      description: "Candidate Application & Shortlisting API",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/swagger/*.ts"], 
};

export const swaggerSpec = swaggerJSDoc(options);
