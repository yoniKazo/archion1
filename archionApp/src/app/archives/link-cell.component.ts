import {Component} from "@angular/core";
import {ICellRendererAngularComp} from 'ag-grid-angular';
import { ArchivesService } from './archives.service';

@Component({
  selector: 'child-cell',
  template: `<a (click)="invokeParentMethod()" style="text-decoration: underline; cursor: pointer">{{this.params.value}}</a>`
})
export class LinkCellRenderer implements ICellRendererAngularComp {
  public params: any;

  constructor( public ags:ArchivesService){
   this.ags.showEmbeded = false;
  }

  agInit(params: any): void {
    this.params = params;
  }

  public invokeParentMethod() {
    this.ags.embeded = this.params.data.Embeded;
    this.ags.showEmbeded = true;
  }

  refresh(): boolean {
    return false;
  }
}
