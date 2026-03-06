import { index } from "../config/pinecone";
import { createEmbedding } from "./embeddingService";

export const searchDocuments = async (query: string) => {

  const embedding = await createEmbedding(query);

  const result = await index.query({
    vector: embedding,
    topK: 5,// top 5 similar results
    includeMetadata: true
  });

  return result.matches;
};