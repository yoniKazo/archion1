import { Component, OnInit } from '@angular/core';
import { ArchivesService } from '../archives.service';
import { LinkCellRenderer } from '../link-cell.component';
//import { Logger } from '@ag-grid-enterprise/all-modules';
import { logger } from '../../shared/config/logger';

@Component({
  selector: 'mof-archives-data',
  templateUrl: './archives-data.component.html',
  styleUrls: ['./archives-data.component.scss']
})
export class ArchivesDataComponent implements OnInit {
  
  public excelStyles: any;
  public defaultColDef:any;
  public freeText:string='';
  constructor(public ars:ArchivesService) { }


  ngOnInit(): void {
    //this.l.info('test1');
    this.ars.defaultColDef = {  sortable: true, resizable: true, filter: true, rowGroupColumns: false };

  
    this.ars.frameworkComponents = {
      linkCellRenderer: LinkCellRenderer,
    };
    this.ars.getArchivesData();
    this.excelStyles = [
      {
        id: 'booleanType',
        dataType: 'boolean'
      },
      {
        id: 'stringType',
        dataType: 'string'
      },
      {
        id: 'number',
        alignment: { horizontal: 'Right' },
        numberFormat: {format: '#,##0.00;@'}
      },
      {
        id: 'percentType',
        alignment: { horizontal: 'Right' },
        numberFormat: {format: '#,##0.0000'}
      },
      {
        id: 'dateType',
        dataType: 'dateTime',
        numberFormat: {format: 'dd/MM/yyyy;@'}
      },
      {
        id: 'dateTimeType',
        dataType: 'dateTime',
        numberFormat: {format: 'dd/MM/yyyy hh:mm:ss;@'}
      },
    ];

    this.defaultColDef = {width: 150, resizable: true};
  }

  onBtExport(){

    let params = {
      fileName: 'דוח ועדה',
      columnKeys:this.ars.columnKeys
    };

    this.ars.gridApi.exportDataAsExcel(params);
  }


  onGridReady(params:any) {
    this.ars.gridApi = params.api;
    this.ars.gridColumnApi = params.columnApi;
    this.ars.gridApi.hideOverlay();
    this.ars.gridApi.hidePopupMenu();
  }
  public onFilterTextBoxChanged() {
    this.ars.gridApi.setQuickFilter(this.freeText);
}

}

