import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, required: true , trim: true },
  name: { type: String, trim: true },
  username: { type: String, required: true, trim: true },
  pp: { type: String },
  cp: { type: String },
  ri: { type: String },
  rs: { type: String },
}, { timestamps: true }); 

const User = models.User || model("User", UserSchema);

export default User;
