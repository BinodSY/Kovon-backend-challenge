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
  // Support both TS (dev) and compiled JS (prod) swagger comment files
  apis: ["./src/swagger/*.ts", "./dist/swagger/*.js", "./src/swagger/*.js"],
};

export const swaggerSpec = swaggerJSDoc(options);
