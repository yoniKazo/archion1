"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchivesLegendController = void 0;
const IController_1 = require("../../IController");
const archives_legend_service_1 = require("./archives-legend.service");
class ArchivesLegendController extends IController_1.IController {
    get path() { return '/ArchivesLegend'; }
    ;
    intializeRoutes(router) {
        router.get('', this.getArchivesLegendData);
    }
    //private  service: ArchivesService = new ArchivesService();
    getArchivesLegendData(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            archives_legend_service_1.ArchivesLegendService.getArchivesLegendData().then((arc) => {
                if (arc.length === undefined || arc.length == 0) {
                    response.status(400);
                    response.end('Status Code: 400 Bad Requests');
                    //     Logger.error(request, 'not find id = ' + rateId + ' in GetRateHistoryExcel', request.params.id);
                    return;
                }
                response.setHeader('Content-type', 'application/json');
                response.status(200);
                response.end(JSON.stringify(arc));
            });
        });
    }
}
exports.ArchivesLegendController = ArchivesLegendController;
exports.default = ArchivesLegendController;
//# sourceMappingURL=archives-legend.controller.js.map