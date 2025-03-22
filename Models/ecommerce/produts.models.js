import moongoose from "mongoose";

const prodcutSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    category: {
      type: moongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    owner:{
        type: moongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
  },
  { timeStamps: true }
);

export const Product = mongoose.model("Product", productSchema);
