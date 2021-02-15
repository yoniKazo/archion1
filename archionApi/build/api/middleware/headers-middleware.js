"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadersMiddleware = void 0;
var HeadersMiddleware = (req, res, next) => {
    //XSS ttttttt
    res.setHeader("X-Content-Type-Options", "nosniff");
    //only https
    res.setHeader("Strict-Transport-Security", "max-age=15768000;includeSubdomains");
    //The application does prevent browsers from sending sensitive information to third party sites in the referer header.
    res.setHeader("Referrer-Policy", "same-origin");
    res.setHeader("X-Frame-Options", "DENY");
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); //'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', "true");
    next();
};
exports.HeadersMiddleware = HeadersMiddleware;
//# sourceMappingURL=headers-middleware.js.map