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
exports.ArchivesLegendService = void 0;
class ArchivesLegendService {
    static getArchivesLegendData() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            resolve(ArchivesLegendData);
        }));
    }
}
exports.ArchivesLegendService = ArchivesLegendService;
exports.default = ArchivesLegendService;
const ArchivesLegendData = [{ "id": 1, "shortName": "﻿אא", "name": "ועדת השרים לענין ששש)" }, { "id": 2, "shortName": "אבט", "name": "ועדת שרים לתיאומון" }, { "id": 3, "shortName": "אבכ", "name": "ועדת המשנה לנושא הגנת העורף" }, { "id": 4, "shortName": "אח", "name": "ועדת השרים לענין אכיפת החוק" }, { "id": 5, "shortName": "איק", "name": "ועדת שרים לעניני עם" }];
//# sourceMappingURL=archives-legend.service.js.map