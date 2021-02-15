import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArchivesLegend } from './models/archives-legend.model';
import { Archives } from './models/archives.model';
declare let config: { url: string };

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpService: HttpClient) { }

  public get baseUrl() {
    
   return config.url == '$(BaseApi)' ?  'http://localhost:3000/' : config.url;
  }

  getArchivesData(): Promise<Archives[]> {
    return this.httpService.get<Archives[]>(this.baseUrl + 'api/Archives').toPromise();
  }

  getArchivesLegendData(): Promise<ArchivesLegend[]>  {
    return this.httpService.get<ArchivesLegend[]>(this.baseUrl + 'api/ArchivesLegend').toPromise();
  }
}
