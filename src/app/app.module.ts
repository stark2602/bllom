import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { BloomComponent } from './bloom/bloom.component';
import { CuraComponent } from './cura/cura.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ConsulantComponent } from './consulant/consulant.component';
import { PathologyComponent } from './pathology/pathology.component';
import { ReportComponent } from './report/report.component';
import { InvestorsComponent } from './investors/investors.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    AppointmentComponent,
    BloomComponent,
    CuraComponent,
    AboutComponent,
    HeaderComponent,
    ServicesPageComponent,
    HospitalsComponent,
    DoctorsComponent,
    ConsulantComponent,
    PathologyComponent,
    ReportComponent,
    InvestorsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
