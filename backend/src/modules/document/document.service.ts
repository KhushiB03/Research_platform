import fs from "fs";
import crypto from "crypto";
import * as pdfParse from "pdf-parse";

const CHUNK_SIZE=1000;
const chunkText=(text : string)=>{
  const chunks =[];
  for(let i=0 ; i<text.length ; i+=CHUNK_SIZE){
    chunks.push(text.slice(i,i+CHUNK_SIZE));
  }
  return chunks;
};
const generateFileHash = (filePath : string)=>{
  const fileBuffer = fs.readFileSync(filePath);
  return crypto.createHash("sha256").update(fileBuffer).digest("hex");
}

const pdf = (pdfParse as any).default || pdfParse;

export const processDocument = async (filePath: string) => {
  const dataBuffer = fs.promises.readFile(filePath);
  const data = await pdf(dataBuffer);
  const chunks = await chunkText(data.text);
  const fileHash = generateFileHash(filePath);

// Check DB if hash already processed
// If yes → return early
  console.log(`total chunks , ${chunks.length}`);

  return {
    totalPages: data.numpages,
    textLength: data.text.length,
  };
};