import express from "express";
import { Request, Response } from "express";
import { IController } from "./api/IController";
import { HeadersMiddleware } from './api/middleware/headers-middleware';
import { TraceMiddleware } from './api/middleware/trace-middleware';
import swaggerUi from 'swagger-ui-express'
import * as swaggerDocument from "./api/config/swagger.json"


import { join } from "path";
  
  
  class StartApp {

    public app: express.Application;
    public port: number;
  
    
    constructor(controllers: IController[], port: number) {
     
      this.app = express();
      this.port = port;
  
      this.initializeMiddlewares();
      this.initializeControllers(controllers);
    }
  
    private initializeMiddlewares() {
  
      this.app.use(express.urlencoded({ extended: true }));
      this.app.use(express.json());
      this.app.use(TraceMiddleware);
      this.app.use(HeadersMiddleware);
     // if (swaggerUi  && swaggerUi.serve)
     this.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
   
  
    }
  
    private initializeControllers(controllers: any) {
      controllers.forEach((controller: IController) => {
        this.app.use("/api" + controller.path, controller.router);
      });
  
      this.app.get("", this.getHelloWorld);

    }

   
  
    private getHelloWorld(req: Request, res: Response) {
      res.send("Hello World");
    }
  
  
    public listen() {
      this.app.listen(this.port, () => {
        console.log(`0000App listening on the port ${this.port}`);
      });
    }
  }
  
  export default StartApp;
  
  
  
  



  

  
   
  
  
  