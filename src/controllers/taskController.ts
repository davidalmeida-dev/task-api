import { Request, Response, NextFunction } from "express";
import { prisma } from "../prisma";
import { createTaskSchema, updateTaskSchema } from "../schemas/taskSchema";
import { Prisma } from "@prisma/client";

export const getTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
  } catch (err) {
    next(err);
  };
};

export const createTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title } = createTaskSchema.parse(req.body);
    const newTask = await prisma.task.create({
        data: { title}
    });
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
};

export const updateTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const dataParsed = updateTaskSchema.parse(req.body);

    const dataToUpdate: any = {};
    if (dataParsed.title !== undefined) dataToUpdate.title = dataParsed.title;
    if (dataParsed.done !== undefined) dataToUpdate.done = dataParsed.done;
    const task = await prisma.task.update({
        where: { id: Number(req.params.id) },
        data: dataParsed
    });
    res.json(task);
  } catch (err: any) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2025") {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    next(err);
  }
};

export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await prisma.task.delete({
      where: { id: Number(req.params.id) },
    });
    res.status(204).send();
  } catch (err: any) {
    if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === "P2025") {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    next(err);
  }
};