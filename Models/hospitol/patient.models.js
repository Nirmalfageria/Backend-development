import mongoose from "mongoose";

const patientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    dignoseWith: {
      type: String,
      required: true,
    },
    dateOfAdmission: {
      type: Date,
      required: true,
    },
    dateOfDischarge: {
      type: Date,
      required: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Doctor",
    },
    addmittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Hospitol",
    },
  },
  {
    timeStmap: true,
  }
);

export const Patient = mongoose.model("Patinet", "patientSchema");
