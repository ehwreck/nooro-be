import type { Request, Response } from "express";

export const index = (req: Request, res: Response) => {
  res.status(200).json();
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
