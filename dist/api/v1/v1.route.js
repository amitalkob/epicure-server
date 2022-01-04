"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var chefs_controller_1 = __importDefault(require("./controllers/chefs.controller"));
var dishes_controller_1 = __importDefault(require("./controllers/dishes.controller"));
var restaurants_controller_1 = __importDefault(require("./controllers/restaurants.controller"));
var users_controller_1 = __importDefault(require("./controllers/users.controller"));
var request_controller_1 = __importDefault(require("./controllers/request.controller"));
var chefs_service_1 = __importDefault(require("./services/chefs.service"));
var dishes_service_1 = __importDefault(require("./services/dishes.service"));
var restaurants_service_1 = __importDefault(require("./services/restaurants.service"));
var users_service_1 = __importDefault(require("./services/users.service"));
var V1Route = /** @class */ (function () {
    function V1Route() {
        this.requestController = new request_controller_1.default();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    V1Route.prototype.initializeRoutes = function () {
        var chefsController = new chefs_controller_1.default(chefs_service_1.default);
        var dishesController = new dishes_controller_1.default(dishes_service_1.default);
        var restaurantsController = new restaurants_controller_1.default(restaurants_service_1.default);
        var usersController = new users_controller_1.default(users_service_1.default);
        this.router.use("/users", usersController.router);
        this.router.all("*", this.requestController.headerValidation);
        this.router.use("/dishes", dishesController.router);
        this.router.use("/chefs", chefsController.router);
        this.router.use("/restaurants", restaurantsController.router);
    };
    return V1Route;
}());
exports.default = V1Route;
//# sourceMappingURL=v1.route.js.map