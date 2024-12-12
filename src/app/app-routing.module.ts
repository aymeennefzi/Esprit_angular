import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
    {
    path: 'user',
    loadChildren: () =>
      import('./Modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'ride',
    loadChildren: () =>
      import('./Modules/ride/ride.module').then((m) => m.RideModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
