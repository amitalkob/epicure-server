import CrudController from "./crud.controller";
import { NextFunction, Request, Response } from "express";

export default class dishesController extends CrudController {
  initializeRoutes() {
    this.router.post("/", this.create.bind(this));
    this.router.get("/", this.readAll.bind(this));
    this.router.get("/:id", this.read.bind(this));
    this.router.put("/:id", this.update.bind(this));
    this.router.delete("/:id", this.update.bind(this));
    this.router.post("/get-dishes-by-rest", this.getDishesByRest.bind(this));
  }
  async getDishesByRest(req: Request, res: Response, next: NextFunction) {
    try {
      const dishes = await this.service.getDishesByRest(req.body.restId);
      res.send(dishes);
    } catch (error) {
      next(error);
    }
  }
}
