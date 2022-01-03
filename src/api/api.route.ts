import { Router } from "express";
import V1Route from "./v1/v1.route";

export default class ApiRoute {
  router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    const v1 = new V1Route();
    this.router.use("/v1", v1.router);
  }
}
