import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/services/student.service';
import { HttpClient } from '@angular/common/http';
import { SessionService } from 'src/services/session.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  studentData: any = {};
  isChatbotVisible = false;
  showGenderPopup = false;
  username:string |null = ''; 
  constructor(private studentService: StudentService, private router: Router, private http:HttpClient) {}

  searchTerm: string = '';
  allData: any[] = [];
  filteredResults: any[] = [];
  searchQuery: string = '';
 

  ngOnInit(): void {
    this.fetchAllData();
    this.username = sessionStorage.getItem('username');
  }

  fetchAllData() {
    const hospitalApi = this.http.get<any[]>('https://retoolapi.dev/AGvhAt/data');
    const doctorApi = this.http.get<any[]>('https://retoolapi.dev/4TUlGo/data');
    

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
  

  showBot = false;


toggleBot() {
  this.showBot = !this.showBot;
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
  

