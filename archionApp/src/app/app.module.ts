import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { AgGridModule } from 'ag-grid-angular';
// import {ModuleRegistry, AllModules} from "@ag-grid-enterprise/all-modules";
// import {LicenseManager} from "@ag-grid-enterprise/core";

// LicenseManager.setLicenseKey("CompanyName=Business Design (L.A Software) Ltd._on_behalf_of_The Israeli Ministry of Finance,LicensedGroup=Multi,LicenseType=MultipleApplications,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=0,AssetReference=AG-009824,ExpiryDate=18_August_2021_[v2]_MTYyOTI0MTIwMDAwMA==23f203f9a6b74b9ec76056e16bf03932");
// ModuleRegistry.registerModules(AllModules);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainContainerComponent } from './layout/main-container/main-container.component';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './shared/httpInterceptorProviders';
import { LoaderComponent } from './shared/common/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainContainerComponent,
    LoaderComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    //AgGridModule.withComponents([]),
    HttpClientModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
