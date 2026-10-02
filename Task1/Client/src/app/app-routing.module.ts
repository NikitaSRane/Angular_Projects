import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { BatchComponent } from './batch/batch.component';

const routes: Routes = [
  {path: '', redirectTo: 'batch',pathMatch: 'full'},
  {path : 'batch', component : BatchComponent} ,
  {path : 'readdata', component : ReadComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
