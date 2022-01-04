"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseService = /** @class */ (function () {
    function BaseService(model) {
        this.model = model;
    }
    BaseService.prototype.add = function (body) {
        return this.model.create(body);
    };
    BaseService.prototype.getAll = function () {
        return this.model.find();
    };
    BaseService.prototype.get = function (id) {
        return this.model.findById(id);
    };
    BaseService.prototype.update = function (id, body) {
        return this.model.findByIdAndUpdate(id, body);
    };
    BaseService.prototype.delete = function (id) {
        return this.model.findByIdAndDelete(id);
    };
    return BaseService;
}());
exports.default = BaseService;
//# sourceMappingURL=base.service.js.map