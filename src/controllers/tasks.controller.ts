import type { Request, Response } from "express";
import { PrismaClient } from '../../generated/prisma/index.js';
import type { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const prisma = new PrismaClient();

type Task = {
  id?: number;
  title: string;
  description?: string;
  completed?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const index = async(req: Request, res: Response) => {
  const allTasks = await prisma.task.findMany();
  res.status(200).json({ tasks: allTasks });
};

export const create = async(req: Request, res: Response) => {
  const { task }: { task: Task } = req.body;

  try {
    const newTask = await prisma.task.create({
      data: {
        title: task.title,
        description: task.description ?? null,
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    })

    res.status(201).json({ message: "Task created successfully", task: newTask });
  } catch(e) {
    res.status(422).json({ error: "Error when creating new task" })
  }
};

export const update = async(req: Request, res: Response) => {
  const taskId: string | undefined = req.params.taskId;
  const { task } = req.body;

  try {
    const updatedTask = await prisma.task.update({
      where: {
        id: Number(taskId)
      },
      data: {
        title: task.title,
        description: task.description,
        completed: task.completed,
        updatedAt: new Date()
      }
    })

    res.status(200).json({ message: "Task updated successfully", task: updatedTask});
  } catch(e){
    res.status(404).json({ error: `Error when updating task.`  })
  }
}

export const destroy = async(req: Request, res: Response) => {
  const taskId: string | undefined = req.params.taskId;

  try {
    await prisma.task.delete({
      where: {
        id: Number(taskId),
      },
    });

    res.status(200).json({ message: "Task deleted successfully" });
  } catch(e){
    return res.status(422).json({ error: "Error when deleting task" })
  }
};
