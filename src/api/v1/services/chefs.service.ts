import Chef from "../models/Chef";
import BaseService from "./base.service";
import { Model } from "mongoose";

class ChefsService extends BaseService {
  constructor(model: Model<any, {}, {}, {}>) {
    super(model);
  }
}

const chefsService = new ChefsService(Chef);

export default chefsService;
