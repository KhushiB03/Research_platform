import { Request, Response } from "express";
import * as paperService from "../services/paper.services";

export const createPaper = async (req: any, res: Response) => {
  const { title, abstract, file_url } = req.body;
  const userId = req.user.id;//req.user for authentication system

  const data = await paperService.createPaper(
    title,
    abstract,
    file_url,
    userId
  );

  res.status(201).json(data);
};

export const getMyPapers = async (req: any, res: Response) => {
  const userId = req.user.id;

  const data = await paperService.getMyPapers(userId);

  res.json(data);
};

export const getAllPapers = async (req: Request, res: Response) => {
  const { page = 1, limit = 10, status } = req.query;

  const data = await paperService.getAllPapers(
    Number(page),
    Number(limit),
    status as string
  );

  res.json(data);
};

export const updatePaper = async (req: any, res: Response) => {
  const paperId = Number(req.params.id);
  const userId = req.user.id;

  const { title, abstract, file_url } = req.body;

  const data = await paperService.updatePaper(
    paperId,
    userId,
    title,
    abstract,
    file_url
  );

  res.json(data);
};

export const updatePaperStatus = async (req: any, res: Response) => {
  const paperId = Number(req.params.id);
  const { status } = req.body;

  const data = await paperService.updatePaperStatus(paperId, status);

  res.json(data);
};