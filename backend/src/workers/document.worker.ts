import { documentQueue } from "../infrastructure/queue/document.queue";
import { processDocument } from "../modules/document/document.service";

documentQueue.process(async (job) => {
  //object destructuring
  //const { something } = object;
  try {
    const { filepath } = job.data;
    console.log("processing", filepath);
    await processDocument(filepath);
    console.log("done", filepath);
  } catch (error) {
    console.error("job failed", error);
    throw error;
  }
});
documentQueue.on("failed" , (job,err)=>{
    console.error(`job ${job.id} failed:`,err.message);
})
