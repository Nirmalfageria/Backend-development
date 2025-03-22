import moongoose from "mongoose";

const hospitolSchema = new moongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    timing: {
      type: String,
      required: true,
    },
    services: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    doctors: {
      type: moongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Doctor",
    },
    patients: {
      type: moongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Patient",
    },
    emergencyTiming: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
