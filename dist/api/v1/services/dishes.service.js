"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Dish_1 = __importDefault(require("../models/Dish"));
var base_service_1 = __importDefault(require("./base.service"));
var querystring_1 = require("querystring");
var DishesService = /** @class */ (function (_super) {
    __extends(DishesService, _super);
    function DishesService(model) {
        return _super.call(this, model) || this;
    }
    DishesService.prototype.add = function (body) {
        body.restaurant = (0, querystring_1.parse)(body.restaurant);
        return this.model.create(body);
    };
    DishesService.prototype.get = function (id) {
        return this.model.findById(id).populate("restaurant");
    };
    DishesService.prototype.getAll = function () {
        return this.model.find().populate("restaurant");
    };
    DishesService.prototype.getDishesByRest = function (restId) {
        return this.model.find({ restaurant: restId });
    };
    DishesService.prototype.update = function (id, body) {
        body.restaurant = (0, querystring_1.parse)(body.restaurant);
        return this.model.findByIdAndUpdate(id, body);
    };
    return DishesService;
}(base_service_1.default));
var dishesService = new DishesService(Dish_1.default);
exports.default = dishesService;
//# sourceMappingURL=dishes.service.js.map