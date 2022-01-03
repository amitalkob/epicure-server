import Dish from "../models/Dish";
import BaseService from "./base.service";
import { Model } from "mongoose";
import { parse, stringify } from "querystring";

class DishesService extends BaseService {
  constructor(model: Model<any, {}, {}, {}>) {
    super(model);
  }

  add(body: any) {
    body.restaurant = parse(body.restaurant);

    return this.model.create(body);
  }

  get(id: string) {
    return this.model.findById(id).populate("restaurant");
  }

  getAll() {
    return this.model.find().populate("restaurant");
  }

  getDishesByRest(restId: any) {
    return this.model.find({ restaurant: restId });
  }

  update(id: string, body: any) {
    body.restaurant = parse(body.restaurant);

    return this.model.findByIdAndUpdate(id, body);
  }
}

const dishesService = new DishesService(Dish);

export default dishesService;
