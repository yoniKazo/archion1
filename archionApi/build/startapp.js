"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const headers_middleware_1 = require("./api/middleware/headers-middleware");
const trace_middleware_1 = require("./api/middleware/trace-middleware");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDocument = __importStar(require("./api/config/swagger.json"));
class StartApp {
    constructor(controllers, port) {
        this.app = express_1.default();
        this.port = port;
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }
    initializeMiddlewares() {
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
        this.app.use(trace_middleware_1.TraceMiddleware);
        this.app.use(headers_middleware_1.HeadersMiddleware);
        // if (swaggerUi  && swaggerUi.serve)
        this.app.use('/swagger', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
    }
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use("/api" + controller.path, controller.router);
        });
        this.app.get("", this.getHelloWorld);
    }
    getHelloWorld(req, res) {
        res.send("Hello World");
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`0000App listening on the port ${this.port}`);
        });
    }
}
exports.default = StartApp;
//# sourceMappingURL=startapp.js.map