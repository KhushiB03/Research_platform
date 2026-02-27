import dotenv from "dotenv";

dotenv.config();

const env = {
  PORT: process.env.PORT ? Number(process.env.PORT) : 4000,
  JWT_SECRET: process.env.JWT_SECRET as string,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1h",

  DB_HOST: process.env.DB_HOST as string,
  DB_USER: process.env.DB_USER as string,
  DB_PASSWORD: process.env.DB_PASSWORD as string,
  DB_NAME: process.env.DB_NAME as string,
  DB_PORT: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306
};

export default env;