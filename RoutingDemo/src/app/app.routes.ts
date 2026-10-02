import { Routes } from '@angular/router';
import { BatchdetailsComponent } from './batchdetails/batchdetails.component';
import { BatchlistComponent } from './batchlist/batchlist.component';
import { InvalidComponent } from './invalid/invalid.component';
import { WelcomeComponent } from './welcome/welcome.component';
export const routes: Routes = [
    {path : '', component : WelcomeComponent},
    {path : 'batchdetails', component : BatchdetailsComponent},
    {path : 'batchlist', component : BatchlistComponent},
    {path : "**", component : InvalidComponent}
// "**" WILDCARD routes
];
