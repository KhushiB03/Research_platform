import { Request, Response } from "express";
import { searchDocuments } from "../services/vectorSearchService";

export const search = async (req: Request, res: Response) => {

  try {

    const { query } = req.body;// bcoz client sends

    const results = await searchDocuments(query);

    res.json({
      success: true,
      results
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Search failed"
    });

  }
};