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
exports.ArchivesController = void 0;
const IController_1 = require("../../IController");
const archives_service_1 = require("./archives.service");
class ArchivesController extends IController_1.IController {
    get path() { return '/Archives'; }
    ;
    intializeRoutes(router) {
        router.get('', this.getArchivesData);
    }
    getArchivesData(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            archives_service_1.ArchivesService.getArchivesData().then((arc) => {
                if (arc.length === undefined || arc.length == 0) {
                    response.status(400);
                    response.end('Status Code: 400 Bad Requests');
                    return;
                }
                response.setHeader('Content-type', 'application/json');
                //   response.status(200);
                response.end(JSON.stringify(arc));
            });
        });
    }
}
exports.ArchivesController = ArchivesController;
exports.default = ArchivesController;
//# sourceMappingURL=archives.controller.js.map