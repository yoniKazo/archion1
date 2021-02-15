"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceMiddleware = void 0;
var TraceMiddleware = (req, res, next) => {
    const ipAddr = req.connection.remoteAddress;
    // Logger.trace(req, 'function='+ req.path);
    next();
};
exports.TraceMiddleware = TraceMiddleware;
//# sourceMappingURL=trace-middleware.js.map