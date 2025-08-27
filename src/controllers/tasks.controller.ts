import type { Request, Response } from "express";
import { PrismaClient } from '../../generated/prisma/index.js';

const prisma = new PrismaClient();


export const index = async(req: Request, res: Response) => {
  const allTasks = await prisma.task.findMany();
  res.status(200).json({ tasks: allTasks });
};

export const create = (req: Request, res: Response) => {

  res.status(200).json();
};

export const update = (req: Request, res: Response) => {
  res.status(200).json();
};

export const destroy = (req: Request, res: Response) => {
  res.status(200).json();
};
