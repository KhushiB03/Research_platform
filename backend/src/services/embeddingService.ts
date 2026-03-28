// this code converts word into numers(vectors).
// //this numeric array is called embedding
// this embedding r created using models from openAi
import OpenAI from "openai";
const client = new OpenAI({
    apiKey : process.env.OPENAI_API_KEY
});
export const embedding = async(text : string)=>{
    const response = await client.embeddings.create({
        model:"text-embedding-3-small",
        input:text
    });
    return response.data[0].embedding;
}
//better done after chunking