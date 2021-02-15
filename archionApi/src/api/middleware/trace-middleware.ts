import { Request, Response } from 'express';





export var TraceMiddleware = (req: Request, res: Response, next: Function) => {
    const ipAddr = req.connection.remoteAddress;
    // Logger.trace(req, 'function='+ req.path);

    next();
}

