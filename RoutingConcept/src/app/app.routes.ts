import { Routes } from '@angular/router';
import { BatchdetailsComponent } from './batchdetails/batchdetails.component';
import { BatchlistComponent } from './batchlist/batchlist.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InvalidComponent } from './invalid/invalid.component';

export const routes: Routes = [
    {path : "", component: WelcomeComponent},
    {path : 'batchlist',component: BatchlistComponent},
    {path : 'batchdetails', component: BatchdetailsComponent},
    {path : "**",component: InvalidComponent}
];