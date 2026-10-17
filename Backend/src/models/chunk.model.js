import mongoose from "mongoose";

const chunkSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    document: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Document",
      required: true,
      index: true,
    },
    text: { type: String, required: true },
    page: { type: Number, required: true },
    chunkIndex: { type: Number, required: true }, // position in the document
    embedding: {
      type: [Number],
      required: true,
      select: false, // don't return this big array in normal queries
    },
  },
  { timestamps: true }
);

export const Chunk = mongoose.model("Chunk", chunkSchema);