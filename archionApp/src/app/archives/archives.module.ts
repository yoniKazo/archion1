import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivesComponent } from './archives/archives.component';
import { ArchivesLegendComponent } from './archives-legend/archives-legend.component';

import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { ArchivesDataComponent } from './archives-data/archives-data.component';
import { ArchivesMenuComponent } from './archives-menu/archives-menu.component';
import { AppModule } from '../app.module';
import { httpInterceptorProviders } from '../shared/httpInterceptorProviders';
import { AgGridModule } from 'ag-grid-angular';
import {ModuleRegistry, AllModules} from "@ag-grid-enterprise/all-modules";
import {LicenseManager} from "@ag-grid-enterprise/core";
import { EmbededComponent } from './embeded/embeded.component';
import { PopUpComponent } from './pop-up/pop-up.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LinkCellRenderer } from './link-cell.component';

LicenseManager.setLicenseKey("CompanyName=Business Design (L.A Software) Ltd._on_behalf_of_The Israeli Ministry of Finance,LicensedGroup=Multi,LicenseType=MultipleApplications,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=0,AssetReference=AG-009824,ExpiryDate=18_August_2021_[v2]_MTYyOTI0MTIwMDAwMA==23f203f9a6b74b9ec76056e16bf03932");
ModuleRegistry.registerModules(AllModules);


const routes: Routes = [
  {
    path: '',
    component: ArchivesComponent
  }

];


@NgModule({

  declarations: [ArchivesComponent, ArchivesLegendComponent, ArchivesDataComponent, ArchivesMenuComponent, EmbededComponent,PopUpComponent,LinkCellRenderer],

imports: [
  BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    AgGridModule.withComponents([]),
    RouterModule.forChild(routes)
  ],
})
export class ArchivesModule { }
