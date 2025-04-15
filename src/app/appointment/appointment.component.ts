import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SessionService } from 'src/services/session.service';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  appointment = {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    department: '',
    notes: '',
    clientname: '',
  };
constructor( private router: Router, private http:HttpClient) {}
  
searchTerm: string = '';
allData: any[] = [];
filteredResults: any[] = [];
searchQuery: string = '';
username :string |null ='';
id: number | null= 0;
studentData: any = {};
ngOnInit(): void {
  this.fetchAllData();
  this.username = sessionStorage.getItem('username');
}

fetchAllData() {
  const hospitalApi = this.http.get<any[]>('https://retoolapi.dev/AGvhAt/data');
  const doctorApi = this.http.get<any[]>('https://retoolapi.dev/4TUlGo/data');
  
   this.id = sessionStorage.getItem('psitId') ? Number(sessionStorage.getItem('psitId')) : 0;
   this.studentData = this.http.get<any>(`https://retoolapi.dev/4TUlGo/data/${this.id}`);
  Promise.all([hospitalApi.toPromise(), doctorApi.toPromise()])
    .then(([hospitals, doctors]) => {
      this.allData = [...hospitals || [], ...doctors || []];
      this.filteredResults = this.allData; // initial load
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

onSearch() {
  const query = this.searchQuery.trim().toLowerCase();

  if (!query) {
    this.filteredResults = []; 
    return;
  }

  this.filteredResults = this.allData.filter(item =>
    Object.values(item).some(val =>
      String(val).toLowerCase().includes(query)
    )
  );
}
fillAppointment(result: any) {
  this.appointment.name = result.name || '';
  this.appointment.department = result.expertise  ||''; 
  this.appointment.clientname = this.studentData.name|| ''; 
  this.filteredResults = []; 
}

  submitAppointment(form: NgForm) {
    if (form.valid) {
      console.log('Appointment Booked:', this.appointment);
      alert('Appointment booked successfully!');
      form.reset();
    } else {
      alert('Please fill all required fields.');
    }
  }
  showLogoutMenu = false;
  toggleLogoutMenu() {
    this.showLogoutMenu = !this.showLogoutMenu;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/home']); 
  }
}
