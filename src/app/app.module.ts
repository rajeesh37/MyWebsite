import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from 'app/init/app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import{RoutingModule} from './routing/routing.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { LanguageComponent } from './language/language.component';
import { FrameworkComponent } from './framework/framework.component';
import { DatabaseComponent } from './database/database.component';
import { BiographyComponent } from './biography/biography.component';
import { AcademicComponent } from './academic/academic.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { CommunicationComponent } from './communication/communication.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import {AgmCoreModule } from 'angular2-google-maps/core';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    RoutingComponent,
    HomeComponent,
    ProfileComponent,
    LanguageComponent,
    FrameworkComponent,
    DatabaseComponent,
    BiographyComponent,
    AcademicComponent,
    ExperienceComponent,
    ContactComponent,
    CommunicationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    ChartsModule,
    Ng2Bs3ModalModule,
    AgmCoreModule.forRoot({
    apiKey: 'YOUR_key'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
