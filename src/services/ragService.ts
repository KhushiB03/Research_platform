import { searchDocuments } from "./vectorSearchService";
import OpenAI from "openai";
//initialses connection to openai
const client = new OpenAI({
  apikey: process.env.OPENAI_API_KEY,
});
//query is the question that user asks
export const getAnswer = async(query: string) => {
  //sends query to pinecone
  //return top k chunks semantically related to query
  const chunks = await searchDocuments(query);
  //for each chunk we create a numbered string
  //eg : Chunk 1: Refunds can be requested within 30 days.
  const context = chunks.map(
    (c: any, i: number) => `chunk ${i + 1}:${c.metdata.text}.join("\n\n")`,
  );
  //The prompt is the instruction + context + question sent to the AI.
  const prompt = `
You are a research assistant.
Use ONLY the context below to answer.
If answer is not found, say "Not found in documents".
Context:
${context}
Question:
${query}
Answer:
`;
  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "you are hepful research assistant" },
      { role: "user", content: prompt },
    ],
    temperature: 0,
  });
  return completion.choices[0].message?.content;
};
