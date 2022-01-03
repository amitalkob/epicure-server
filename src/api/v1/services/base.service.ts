import { Model } from "mongoose";

export default class BaseService {
  model: Model<any, {}, {}, {}>;

  constructor(model: Model<any, {}, {}, {}>) {
    this.model = model;
  }

  add(body: any) {
    return this.model.create(body);
  }

  getAll() {
    return this.model.find();
  }

  get(id: string) {
    return this.model.findById(id);
  }

  update(id: string, body: any) {
    return this.model.findByIdAndUpdate(id, body);
  }

  delete(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}
