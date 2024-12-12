import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrajetDetailComponent } from './trajet-detail/trajet-detail.component';
import { TrajetComponent } from './trajet/trajet.component';

const routes: Routes = [
  {path : 'ListeTrajet' , component: TrajetDetailComponent},
  {path : 'trajet' , component: TrajetComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RideRoutingModule { }
