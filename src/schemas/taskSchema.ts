import { z } from "zod";

export const createTaskSchema = z.object({
    title: z.string().min(1, "Título é obrigatório"),
});

export const updateTaskSchema = z.object({
    title: z.string().optional(),
    done: z.boolean().optional(),
});

