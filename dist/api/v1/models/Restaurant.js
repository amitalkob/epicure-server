"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var restaurantSchema = new mongoose_1.Schema({
    name: { type: String, trim: true, required: true },
    chef: { type: mongoose_1.Schema.Types.ObjectId, ref: "Chef", required: true },
    pic: { type: String, trim: true, required: true },
});
var Restaurant = (0, mongoose_1.model)("Restaurant", restaurantSchema);
exports.default = Restaurant;
//# sourceMappingURL=Restaurant.js.map