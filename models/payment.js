import mongoose, { Schema, model, models } from "mongoose";

const PaymentSchema = new Schema({
  name: { type: String, required: true , trim: true },
  to_user: { type: String, required: true, trim: true },
  oid: { type: String, required: true },
  message: { type: String },
  amount: { type: Number, required: true },
  done: { type: Boolean, default: false },
}, { timestamps: true }); 

const Payment = models.Payment || model("Payment", PaymentSchema);

export default Payment;
