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
var Restaurant_1 = __importDefault(require("../models/Restaurant"));
var base_service_1 = __importDefault(require("./base.service"));
var querystring_1 = require("querystring");
var RestaurantsService = /** @class */ (function (_super) {
    __extends(RestaurantsService, _super);
    function RestaurantsService(model) {
        return _super.call(this, model) || this;
    }
    RestaurantsService.prototype.add = function (body) {
        body.chef = (0, querystring_1.parse)(body.chef);
        return this.model.create(body);
    };
    RestaurantsService.prototype.get = function (id) {
        return this.model.findById(id).populate("chef");
    };
    RestaurantsService.prototype.getAll = function () {
        return this.model.find().populate("chef");
    };
    RestaurantsService.prototype.getRestsByChef = function (chefId) {
        return this.model.find({ chef: chefId });
    };
    RestaurantsService.prototype.update = function (id, body) {
        body.chef = (0, querystring_1.parse)(body.chef);
        return this.model.findByIdAndUpdate(id, body);
    };
    return RestaurantsService;
}(base_service_1.default));
var restaurantsService = new RestaurantsService(Restaurant_1.default);
exports.default = restaurantsService;
//# sourceMappingURL=restaurants.service.js.map