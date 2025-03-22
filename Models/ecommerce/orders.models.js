import mongoose from "mongoose";
import moongoose from "mongoose";
const orderItemsSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: [orderItemsSchema],

    paymentMethod: {
      type: String,
      enum: ["Cash", "Card", "Mobile Money"],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Delivered", "Cancelled"],
      default: "Pending",
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timeStamp: true,
  }
);

export const Order = mongoose.model("Order", "orderSchema");
