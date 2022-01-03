import { Router } from "express";
import ChefsController from "./controllers/chefs.controller";
import DishesController from "./controllers/dishes.controller";
import RestaurantsController from "./controllers/restaurants.controller";
import UsersController from "./controllers/users.controller";
import RequestController from "./controllers/request.controller";

import chefsService from "./services/chefs.service";
import dishesService from "./services/dishes.service";
import restaurantsService from "./services/restaurants.service";
import usersService from "./services/users.service";

export default class V1Route {
  router: Router;
  private requestController = new RequestController();

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    const chefsController = new ChefsController(chefsService);
    const dishesController = new DishesController(dishesService);
    const restaurantsController = new RestaurantsController(restaurantsService);
    const usersController = new UsersController(usersService);

    this.router.use("/users", usersController.router);
    this.router.all("*", this.requestController.headerValidation);

    this.router.use("/dishes", dishesController.router);
    this.router.use("/chefs", chefsController.router);
    this.router.use("/restaurants", restaurantsController.router);
  }
}
