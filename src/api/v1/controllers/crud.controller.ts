import { Router, Request, Response, NextFunction } from "express";
import BaseService from "../services/base.service";

export default class CrudController {
  router: Router;
  service: any;

  constructor(service: BaseService) {
    this.router = Router();
    this.initializeRoutes();
    this.service = service;
  }

  initializeRoutes() {
    this.router.post("/", this.create.bind(this));
    this.router.get("/", this.readAll.bind(this));
    this.router.get("/:id", this.read.bind(this));
    this.router.put("/:id", this.update.bind(this));
    this.router.delete("/:id", this.update.bind(this));
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.service.add(req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async readAll(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.service.getAll();
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.service.get(req.params.id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.service.update(req.params.id, req.body);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.service.delete(req.params.id);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}
