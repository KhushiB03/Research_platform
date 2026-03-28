//vector database used to store embeddings
import { Pinecone } from "@pinecone-database/pinecone";
//create connection
//! shows non null assertion
const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!
});

export const index = pinecone.Index(process.env.PINECONE_INDEX!);