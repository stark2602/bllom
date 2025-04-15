import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { BloomComponent } from './bloom/bloom.component';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';
import { AboutComponent } from './about/about.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { ConsulantComponent } from './consulant/consulant.component';
import { PathologyComponent } from './pathology/pathology.component';
import { ReportComponent } from './report/report.component';
import { CuraComponent } from './cura/cura.component';
import { DoctorsComponent } from './doctors/doctors.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [NoAuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'appointment', component: AppointmentComponent, canActivate: [AuthGuard] },
  { path: 'bloom', component: BloomComponent, canActivate: [AuthGuard] },
  {path : 'about', component: AboutComponent},
  {path : 'service', component: ServicesPageComponent},
  {path : 'doctor', component: DoctorsComponent, canActivate: [AuthGuard]},
  {path : 'consultant', component: ConsulantComponent, canActivate: [AuthGuard]},
  {path : 'hospitals', component: HospitalsComponent , canActivate: [AuthGuard]},
  {path : 'pathology', component: PathologyComponent , canActivate: [AuthGuard]},
  {path : 'report', component: ReportComponent , canActivate: [AuthGuard]},
  {path : 'cura', component: CuraComponent , canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
