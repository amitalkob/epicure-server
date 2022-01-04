"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var chefSchema = new mongoose_1.Schema({
    name: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    pic: { type: String, trim: true },
});
var Chef = (0, mongoose_1.model)("Chef", chefSchema);
exports.default = Chef;
//# sourceMappingURL=Chef.js.map