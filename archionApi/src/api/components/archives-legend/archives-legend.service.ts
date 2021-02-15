

import { NextFunction, Request, Response, Router } from 'express';

import { ArchivesLegend } from '../../core/models/archives-legend.model';




export class ArchivesLegendService {

	public static getArchivesLegendData(): Promise<ArchivesLegend[]> {

		return new Promise(async (resolve, reject) => {
			resolve(ArchivesLegendData);

		}
		)
	}

}
export default ArchivesLegendService;

const ArchivesLegendData = [{ "id": 1, "shortName": "﻿אא", "name": "ועדת השרים לענין ששש)" }, { "id": 2, "shortName": "אבט", "name": "ועדת שרים לתיאומון" }, { "id": 3, "shortName": "אבכ", "name": "ועדת המשנה לנושא הגנת העורף" }, { "id": 4, "shortName": "אח", "name": "ועדת השרים לענין אכיפת החוק" }, { "id": 5, "shortName": "איק", "name": "ועדת שרים לעניני עם" }];