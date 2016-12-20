import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule , Routes} from '@angular/router';



import {HomeComponent} from 'app/home/home.component';
import { ProfileComponent } from 'app/profile/profile.component';
import {ContactComponent} from 'app/contact/contact.component';

const appRoutes : Routes = [
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
       { path: 'contact', component: ContactComponent }
];




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
