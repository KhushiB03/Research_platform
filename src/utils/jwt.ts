import jwt, { SignOptions } from "jsonwebtoken";
import env from "../config/env";

export const signToken = (payload: object) => {
  const options: SignOptions = {
    expiresIn: parseInt(env.JWT_EXPIRES_IN, 10)
  };
  return jwt.sign(payload, env.JWT_SECRET as string, options);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, env.JWT_SECRET);
};