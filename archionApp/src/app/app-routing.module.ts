import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchivesModule } from './archives/archives.module';


const routes: Routes = [
  {
     path: '',
     loadChildren: './archives/archives.module'
 
   }]

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ArchivesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
