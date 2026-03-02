import fs from "fs";
import * as pdfParse from "pdf-parse";
const CHUNK_SIZE=1000;
const chunkText=(text : string)=>{
  const chunks =[];
  for(let i=0 ; i<text.length ; i+=CHUNK_SIZE){
    chunks.push(text.slice(i,i+CHUNK_SIZE));
  }
  return chunks;
};

const pdf = (pdfParse as any).default || pdfParse;

export const processDocument = async (filePath: string) => {
  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdf(dataBuffer);
  const chunks = await chunkText(data.text);
  console.log(`total chunks , ${chunks.length}`);

  return {
    totalPages: data.numpages,
    textLength: data.text.length,
  };
};