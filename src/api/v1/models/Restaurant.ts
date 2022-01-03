import { Schema, model } from "mongoose";

const restaurantSchema = new Schema({
  name: { type: String, trim: true, required: true },
  chef: { type: Schema.Types.ObjectId, ref: "Chef", required: true },
  pic: { type: String, trim: true, required: true },
});

const Restaurant = model("Restaurant", restaurantSchema);

export default Restaurant;
