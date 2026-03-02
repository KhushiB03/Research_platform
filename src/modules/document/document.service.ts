import fs from "fs";
import * as pdfParse from "pdf-parse";

const pdf = (pdfParse as any).default || pdfParse;

export const processDocument = async (filePath: string) => {
  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdf(dataBuffer);

  return {
    totalPages: data.numpages,
    textLength: data.text.length,
  };
};