import Restaurant from "../models/Restaurant";
import BaseService from "./base.service";
import { Model } from "mongoose";
import { parse } from "querystring";

class RestaurantsService extends BaseService {
  constructor(model: Model<any, {}, {}, {}>) {
    super(model);
  }

  add(body: any) {
    body.chef = parse(body.chef);

    return this.model.create(body);
  }

  get(id: string) {
    return this.model.findById(id).populate("chef");
  }

  getAll() {
    return this.model.find().populate("chef");
  }

  getRestsByChef(chefId: any) {
    return this.model.find({ chef: chefId });
  }

  update(id: string, body: any) {
    body.chef = parse(body.chef);

    return this.model.findByIdAndUpdate(id, body);
  }
}

const restaurantsService = new RestaurantsService(Restaurant);

export default restaurantsService;
