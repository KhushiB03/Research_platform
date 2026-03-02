import { documentQueue } from "../infrastructure/queue/document.queue";
import { processDocument } from "../modules/document/document.service";

documentQueue.process(async (job)=>{
    //object destructuring
    //const { something } = object;
    const {filepath} = job.data;
    console.log("processing" , filepath);
    await processDocument(filepath);
    console.log("done" , filepath);
})