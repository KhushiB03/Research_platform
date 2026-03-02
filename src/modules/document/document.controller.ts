import { Request, Response } from "express";
import { documentQueue } from "../../infrastructure/queue/document.queue";

export const uploadDocument = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }
await documentQueue.add({filepath : req.file.path,});
    //const result = await processDocument(req.file.path);

    return res.status(200).json({
      success: true,
      message: "Document processed successfully",
      //data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error processing document",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};