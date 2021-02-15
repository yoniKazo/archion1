"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const archives_controller_1 = require("./api/components/archives/archives.controller");
const archives_legend_controller_1 = require("./api/components/archives-legend/archives-legend.controller");
const startapp_1 = __importDefault(require("./startapp"));
(() => {
    process.once('unhandledRejection', (reason, p) => {
        console.error(reason, 'Unhandled Rejection at Promise', p);
    });
    process.once('uncaughtException', err => {
        console.error(err, 'Uncaught Exception thrown');
    });
    const CoreApp = new startapp_1.default([
        new archives_controller_1.ArchivesController(),
        new archives_legend_controller_1.ArchivesLegendController(),
    ], !process.env.PORT ? 8081 : +process.env.PORT);
    CoreApp.listen();
})();
//# sourceMappingURL=app.js.map