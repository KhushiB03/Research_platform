import OpenAI from "openai";
import { Models } from "openai/resources/models";
import { success } from "zod";

const client = create OpenAI({
    apiKey : process.env.OPENAI_API_KEY
});
export default  summaryDocument = async(req: Request  , res:Response)=>{
    try {
        const {documentId} = req.body;
        const [rows]:any = pool.query(
            `SELECT chunk_text FROM document_chunks WHERE document_id =? LIMIT 20`,
            [documentId]
        );
        const text = rows.map(r=>r.chunk_text).join("\n");
        const completion = await client.completion.create({
            model : "gpt-4o-mini",
            messages:[
                {
                    role:"user",
                    content :`summarize this document ${text}`
                }
            ]
        });
        res.json({
            success:true,
            message: completion.choices[0].message?.content
        });

    } catch (error) {
        res.status(500).json({
            success:false,
            message:"summarization failed"
        });
        
    }
};