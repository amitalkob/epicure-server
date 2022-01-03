import { Schema, model } from "mongoose";

const chefSchema = new Schema({
  name: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  pic: { type: String, trim: true },
});

const Chef = model("Chef", chefSchema);

export default Chef;
