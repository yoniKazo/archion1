import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { ArchivesLegend } from '../shared/models/archives-legend.model';

import { Archives } from '../shared/models/archives.model';
import {ExcelExportModule,ClientSideRowModelModule} from "@ag-grid-enterprise/all-modules";
import archivesParam from "../../assets/config/archives.json";
@Injectable({
  providedIn: 'root'
})
export class ArchivesService {

  public gridApi:any;
  public active1= 'active';
  public active2= '';
  public active3= '';
  public active4= '';
  public gridColumnApi: any;
  public showEmbeded = false;
  public embeded ='';
  public columnDefs:any[] | undefined = [];
  public columnKeys= null ;
  public decryptionCodeData = null;
  public showExcel = false;
  public modules: any = [ExcelExportModule, ClientSideRowModelModule];
  public archivesDataReport: Archives[]| null = null;
  public archivesData!: Archives[];
  public archivesLegendData!: ArchivesLegend[];
  public showArchivesLegend = false;
  public frameworkComponents:any;
  public defaultColDef: any;

  constructor(public hs: HttpService) {
    
   }
  public getArchivesLegendData()   {
    this.active1= '';
    this.active2= '';
    this.active3= '';
    this.active4= 'active';
    this.hs.getArchivesLegendData().then(res => 
      {
      this.archivesLegendData = res;
      this.showArchivesLegend = true;
        });
    
  }

  public getCommittee()   {

    
    this.active1= 'active';
    this.active2= '';
    this.active3= '';
    this.active4= '';

    this.columnDefs=[];
    this.archivesDataReport= null;
    let columnDefsTmp =[];
    this.setColumnDefs(archivesParam.committee);
    this.archivesDataReport =  this.archivesData.filter((s) => (s.CommityNameAndNum.trim() !="0" && s.CommityNameAndNum.trim() !="/0"));
    this.showArchivesLegend = false;     
  }

  public setColumnDefs(obj: any)
  {
    this.columnDefs=[];
    let columnDefsTmp =[];
    for (var i = 0; i < obj.length; i++) {
      if (obj[i].type == 'date') {
         
        columnDefsTmp.push({
          headerClass: 'v-grid-title-small ag-break-title pr-2',
          headerName: obj[i].hebrew_value, 
          field: obj[i].key,
          cellClass: 'dateType pr-2',
          width: 120, menuTabs: [], suppressMovable: true,
          sortable: true,
          filter: 'agDateColumnFilter',

    // add extra parameters for the date filter
    filterParams: {
      debounceMs: 500,
      suppressAndOrCondition: true,
      comparator: function(filterLocalDateAtMidnight:any, cellValue:any) {
        if (cellValue == null) {
          return 0;
        }
        var dateParts = cellValue.split('/');
        var year = Number(dateParts[2]);
        var month = Number(dateParts[1]) - 1;
        var day = Number(dateParts[0]);
        var cellDate = new Date(year, month, day);
        if (cellDate < filterLocalDateAtMidnight) {
          return -1;
        } else if (cellDate > filterLocalDateAtMidnight) {
          return 1;
        } else {
          return 0;
        }
      },}, 
        
   
         cellRenderer: 'linkCellRenderer',
       
         
        });

   
      }
      else
   
      columnDefsTmp.push({
            headerClass: 'v-grid-title-small ag-break-title pr-2',
            headerName: obj[i].hebrew_value, 
            field: obj[i].key,
            cellClass: 'stringType pr-2',
            cellRenderer: 'linkCellRenderer',
            filter: 'agTextColumnFilter',
            width: obj[i].key.indexOf('DecisionTitle') >= 0 ? 550 : 150,
            sortable: true
              
          });
   
   
          
    }
    columnDefsTmp.push({
           
            headerName: '', 
            hide: true,
            field: 'Embeded',
            cellClass: 'stringType pr-2',
              
          });
    
    this.columnDefs = columnDefsTmp;
    if (this.gridApi != null) 
    this.gridApi.setColumnDefs(columnDefsTmp);

    this.gridColumnApi.resetColumnState();
  }

  public getCommitteeDecisions()   {
    this.columnDefs=[];
    let columnDefsTmp =[];
    this.archivesDataReport= null;
    this.active1= '';
    this.active2= '';
    this.active3= 'active';
    this.active4= ''; 
    this.setColumnDefs(archivesParam.committeeDecisions);
    this.archivesDataReport =  this.archivesData.filter((s) => (s.CommityNameAndNum.trim() !="0" && s.CommityNameAndNum.trim() !="/0"));
    ;
    this.showArchivesLegend = false;

    
     
       this.embeded = this.archivesData[0].Embeded;
  }
  
  public getGovernmentDecision()   {
    this.active1= '';
    this.active2= 'active';
    this.active3= '';
    this.active4= '';

    let columnDefsTmp =[];
    this.columnDefs=[];
    this.archivesDataReport= null;
    this.setColumnDefs(archivesParam.governmentDecision);
  
      this.archivesDataReport =  this.archivesData.filter((s) => (s.GovDecision !=0));
     
      this.showArchivesLegend = false;
       
  }

  public getArchivesData()   {

   
    this.hs.getArchivesData().then(res => 
      {
        this.archivesData = res;
        this.showArchivesLegend = false;
        this.getCommittee();
        
     });
}

}
