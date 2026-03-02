import { Request, Response } from "express";
import { processDocument } from "./document.service";

export const uploadDocument = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const result = await processDocument(req.file.path);

    return res.status(200).json({
      success: true,
      message: "Document processed successfully",
      data: result,
    });
  } catch (error) {
    console.error("Upload error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};