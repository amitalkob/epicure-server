"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var api_route_1 = __importDefault(require("./api/api.route"));
var body_parser_1 = __importDefault(require("body-parser"));
mongoose_1.default.connect("mongodb://ec2-3-131-97-117.us-east-2.compute.amazonaws.com/epicureDB");
var App = /** @class */ (function () {
    function App(port) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.initializeSettings();
        this.initializeRoutes();
    }
    App.prototype.initializeSettings = function () {
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use((0, cors_1.default)());
    };
    App.prototype.initializeRoutes = function () {
        this.app.use("/api", new api_route_1.default().router);
    };
    return App;
}());
exports.default = App;
//# sourceMappingURL=app.js.map