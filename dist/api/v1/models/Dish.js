"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var dishSchema = new mongoose_1.Schema({
    name: { type: String, trim: true, required: true },
    text: { type: String, trim: true, required: true },
    pic: { type: String, trim: true, required: true },
    icons: Array,
    price: { type: String, trim: true, required: true },
    restaurant: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true,
    },
});
var Dish = (0, mongoose_1.model)("Dish", dishSchema);
exports.default = Dish;
//# sourceMappingURL=Dish.js.map