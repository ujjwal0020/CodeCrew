const mongoose = require("mongoose");

const connectionRequestSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["ignored", "interested", "accepted", "rejected"],
        message: `{VALUE} is incorrect status type`,
      },
    },
  },
  { timestamps: true }
);

// ConnectionRequest.find({senderId: 273478465864786587, receiverId: 273478465864786587})

connectionRequestSchema.index({ senderId: 1, receiverId: 1 });

connectionRequestSchema.pre("save", function (next) {
  const connectionRequest = this;
  // Check if the senderId is same as receiverId
  if (connectionRequest.senderId.equals(connectionRequest.receiverId)) {
    throw new Error("Cannot send connection request to yourself!");
  }
  next();
});

const ConnectionRequestModel = new mongoose.model(
  "ConnectionRequest",
  connectionRequestSchema
);

module.exports = ConnectionRequestModel;
