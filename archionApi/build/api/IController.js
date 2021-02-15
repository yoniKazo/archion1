"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IController = void 0;
const express_1 = require("express");
class IController {
    constructor() {
        this.router = express_1.Router();
        this.intializeRoutes(this.router);
    }
    static Cast(serialized) {
        return serialized;
    }
}
exports.IController = IController;
//# sourceMappingURL=IController.js.map