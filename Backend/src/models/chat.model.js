import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    role: 
    { 
        type: String,
        enum: ["user", "assistant"], 
        required: true 
    },
    text: 
    { 
        type: String, 
        required: true 
    },
    // only for assistant messages: which pages the answer came from
    sources: [
      {
        page: { type: Number, required: true },
        _id: false,
      },
    ],
    createdAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const chatSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Chat must belong to a user"],
      index: true,
    },
    document: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Document",
      required: true,
    },
    messages: [messageSchema],
  },
  { timestamps: true }
);

// one chat per user per document
chatSchema.index({ user: 1, document: 1 }, { unique: true });

export const Chat = mongoose.model("Chat", chatSchema);