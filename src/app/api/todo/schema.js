import { z } from "zod";

export const todoSchema = z.object({
  title: z.string().min(3).max(20),
  status: z.optional(z.enum(["todo", "inprogress", "done"])),
});
