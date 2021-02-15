
import { NextFunction, Request, Response, Router } from 'express';
import { IController } from '../../IController';
import { ArchivesService } from './archives.service';

export class ArchivesController extends IController{


    get path() { return '/Archives'; };

    protected intializeRoutes(router: Router) {
        router.get('', this.getArchivesData);
    }
	
    public async getArchivesData(request: Request, response: Response)
    {
       ArchivesService.getArchivesData().then((arc) => {
        if (arc.length === undefined || arc.length == 0) {
            response.status(400);
            response.end('Status Code: 400 Bad Requests');
       
            return ;
          
        }
        response.setHeader('Content-type', 'application/json');
     //   response.status(200);
        response.end( JSON.stringify(arc));
    
        });
      }

   
  
}

export default ArchivesController;
