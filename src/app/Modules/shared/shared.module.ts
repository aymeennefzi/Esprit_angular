import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltreComponent } from './filtre/filtre.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FiltreComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule, 
    RouterModule
  ],
  exports:[
    FiltreComponent,
    FooterComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
