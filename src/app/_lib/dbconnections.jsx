import mongoose from "mongoose";

export function dbConnections() {
  mongoose
    .connect(
      `mongodb+srv://Mostafaarafat:${process.env.MONGO_SECRET}@cluster0.7wnwhhk.mongodb.net/todo`
    )
    .then(() => console.log("connected to database"))
    .catch((err) => console.log(`problem yasta the error is ${err}`));
}
