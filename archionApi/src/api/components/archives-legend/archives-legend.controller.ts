
import { NextFunction, Request, Response, Router } from 'express';
import { IController } from '../../IController';
import { ArchivesLegendService } from './archives-legend.service';


export class ArchivesLegendController extends IController{


    get path() { return '/ArchivesLegend'; };

    protected intializeRoutes(router: Router) {
        router.get('', this.getArchivesLegendData);
    }
	//private  service: ArchivesService = new ArchivesService();

    public async getArchivesLegendData(request: Request, response: Response)
    {
        ArchivesLegendService.getArchivesLegendData().then((arc) => {
            if (arc.length === undefined || arc.length == 0) {
                response.status(400);
                response.end('Status Code: 400 Bad Requests');
           //     Logger.error(request, 'not find id = ' + rateId + ' in GetRateHistoryExcel', request.params.id);
        
                return ;
              
            }
            response.setHeader('Content-type', 'application/json');
            response.status(200);
            response.end( JSON.stringify(arc));
        
            });
          }
   
}

export default ArchivesLegendController;
