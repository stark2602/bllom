import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionService } from 'src/services/session.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent  implements OnInit {
  doctors: any[] = [];
  filteredDoctors: any[] = [];
  searchQuery = '';
  selectedExpertise = '';
  sortFee = '';
  expertiseList: string[] = [];
  username:string |null = '';
  constructor(private http: HttpClient, private router:Router) {}

  ngOnInit() {
    this.http.get<any[]>('https://retoolapi.dev/4TUlGo/data').subscribe((res) => {
      this.doctors = res;
      this.expertiseList = [...new Set(this.doctors.map(d => d.expertise))];
      this.filterDoctors();
      this.username = sessionStorage.getItem('username');
    });
  }

  filterDoctors() {
    let result = [...this.doctors];

    // Search filter
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      result = result.filter(doc =>
        doc.name.toLowerCase().includes(query) ||
        doc.expertise.toLowerCase().includes(query)
      );
    }

    // Expertise filter
    if (this.selectedExpertise) {
      result = result.filter(doc => doc.expertise === this.selectedExpertise);
    }

    // Sort by fee
    if (this.sortFee === 'asc') {
      result.sort((a, b) => a.fee - b.fee);
    } else if (this.sortFee === 'desc') {
      result.sort((a, b) => b.fee - a.fee);
    }

    this.filteredDoctors = result;
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



