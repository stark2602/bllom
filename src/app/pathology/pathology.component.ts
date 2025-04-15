import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pathology',
  templateUrl: './pathology.component.html',
  styleUrls: ['./pathology.component.css']
})
export class PathologyComponent implements OnInit {
 hospitals: any[] = [];
  filteredHospitals: any[] = [];
  searchTerm: string = '';
  timeFilter: string = '';
  username:string |null = '';
  constructor(private http: HttpClient, private router:Router) {}

  ngOnInit(): void {
    this.fetchHospitals();
    this.username = sessionStorage.getItem('username');
  }

  fetchHospitals(): void {
    this.http.get<any[]>('https://retoolapi.dev/AGvhAt/data').subscribe(data => {
      this.hospitals = data;
      this.filteredHospitals = data;
    });
  }

  filterHospitals(): void {
    this.filteredHospitals = this.hospitals.filter(hospital =>
      hospital.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.timeFilter === '' || hospital.time === this.timeFilter)
    );
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
