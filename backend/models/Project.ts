import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["not_completed", "completed"],
      default: "not_completed"
    },
    started_at: {
      type: Date,
      required: true,
    },
    ended_at: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", ProjectSchema);
export default Project;
