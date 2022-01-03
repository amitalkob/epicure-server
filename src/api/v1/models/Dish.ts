import { Schema, model } from "mongoose";

const dishSchema = new Schema({
  name: { type: String, trim: true, required: true },
  text: { type: String, trim: true, required: true },
  pic: { type: String, trim: true, required: true },
  icons: Array,
  price: { type: String, trim: true, required: true },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
});

const Dish = model("Dish", dishSchema);

export default Dish;
