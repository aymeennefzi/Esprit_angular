import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './Modules/shared/shared.module';
import { RideModule } from './Modules/ride/ride.module';
import { UserModule } from './Modules/user/user.module';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RideModule,
    UserModule,
    RouterModule,      // Assurez-vous que RouterModule est importé ici

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
