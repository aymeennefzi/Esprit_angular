import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrajetComponent } from './trajet/trajet.component';
import { TrajetDetailComponent } from './trajet-detail/trajet-detail.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RideRoutingModule } from './ride-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TrajetComponent,
    TrajetDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RideRoutingModule,
    RouterModule
  ]
})
export class RideModule { }
