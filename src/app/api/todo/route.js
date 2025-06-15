import { dbConnections } from "@/app/_lib/dbconnections";
import { todoModel } from "@/app/_lib/models/todo";
import { todoSchema } from "./schema";
dbConnections();
export async function GET() {
  // first get all todos from db
  try {
    const todos = await todoModel.find();
    return new Response(JSON.stringify({ data: todos }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "something went wrong" }), {
      status: 500,
    });
  }
}
export async function POST(request) {
  const todo = await request.json();
  console.log("rewquest data ", todo);
  try {
    const validation = todoSchema.safeParse(todo);
    if (!validation.success) {
      return new Response(JSON.stringify({ error: "validation error " }), {
        status: 400,
      });
    }
    const newTodo = await todoModel.create(validation.data).save();
    return new Response(JSON.stringify({ data: newTodo }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "something went wrong when adding data " }),
      {
        status: 500,
      }
    );
  }
}
