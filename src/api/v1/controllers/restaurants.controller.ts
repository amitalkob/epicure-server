import CrudController from "./crud.controller";
import { NextFunction, Request, Response } from "express";

export default class RestaurantsController extends CrudController {
  initializeRoutes() {
    this.router.post("/", this.create.bind(this));
    this.router.get("/", this.readAll.bind(this));
    this.router.get("/:id", this.read.bind(this));
    this.router.put("/:id", this.update.bind(this));
    this.router.delete("/:id", this.update.bind(this));
    this.router.post("/get-rests-by-chef", this.getRestsByChef.bind(this));
  }

  async getRestsByChef(req: Request, res: Response, next: NextFunction) {
    try {
      const rests = await this.service.getRestsByChef(req.body.chefId);
      res.send(rests);
    } catch (error) {
      next(error);
    }
  }
}
