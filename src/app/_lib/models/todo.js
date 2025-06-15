const { default: mongoose } = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    default: "todo",

    enum: ["todo", "inprogress", "done"],
  },
});
export const todoModel =
  mongoose.models.Todo || mongoose.model("Todo", todoSchema);
