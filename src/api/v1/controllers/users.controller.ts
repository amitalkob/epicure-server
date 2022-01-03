import { NextFunction, Request, Response } from "express";
import CrudController from "./crud.controller";
import JWTController from "./jwt.controller";

export default class usersController extends CrudController {
  initializeRoutes() {
    this.router.post("/register", this.register.bind(this));
    this.router.post("/login", this.login.bind(this));
  }

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.service.register(
        req.body.name,
        req.body.email,
        req.body.password
      );

      res.send(user);
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.service.login(req.body.email, req.body.password);
      const token = JWTController.createToken(user._id.toString());

      res.send({ token, user });
    } catch (error) {
      next(error);
    }
  }
}
