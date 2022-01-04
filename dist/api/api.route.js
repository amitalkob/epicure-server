"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var v1_route_1 = __importDefault(require("./v1/v1.route"));
var ApiRoute = /** @class */ (function () {
    function ApiRoute() {
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    ApiRoute.prototype.initializeRoutes = function () {
        var v1 = new v1_route_1.default();
        this.router.use("/v1", v1.router);
    };
    return ApiRoute;
}());
exports.default = ApiRoute;
//# sourceMappingURL=api.route.js.map