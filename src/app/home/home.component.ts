import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { SessionService } from 'src/services/session.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username = '';
  password = '';
  psitid = '';
  errorMessage = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  // ---------- Login Logic ----------
  login() {
    this.authService.validateCredentials(this.username, this.password, this.psitid).subscribe(
      (users: any[]) => {
        const matchedUser = users.find(user =>
          user['name'] === this.username &&
          user['password'] === this.password &&
          user['PSIT ID'] == this.psitid 
        );
        console.log('Matched user:', this.username, this.password, this.psitid); 
        console.log('Matched user:', matchedUser);
        if (matchedUser) {
          sessionStorage.setItem('psitId', this.psitid); // save as string
          sessionStorage.setItem('username', this.username); // save as string
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Invalid username, password, or ID';
        }
      },
      error => {
        this.errorMessage = 'Something went wrong. Please try again.';
      }
    );
  }

  isLoginvisible = false;
  isSignupVisible = false;

  showLogin() {
    this.isLoginvisible = !this.isLoginvisible;
    this.isSignupVisible = false;
  }

  showSignup() {
    this.isSignupVisible = !this.isSignupVisible;
    this.isLoginvisible = false;
  }
  about(){
    this.router.navigate(['/about']);
  }

  // ---------- Sign Up Logic ----------
  signupErrorMessage = '';
  signupData = {
    id:'',
    name: '',
    psitid: '',
    course: '',
    room: null,
    blood: '',
    female: null,
    hostel: '',
    password: '',
    confirmPassword: ''
  };

  register() {
    if (this.signupData.password !== this.signupData.confirmPassword) {
      this.signupErrorMessage = 'Passwords do not match.';
      return;
    }

    const newUser = {
      id: this.signupData.id,
      name: this.signupData.name,
      'PSIT ID': this.signupData.psitid,
      course: this.signupData.course,
      room: this.signupData.room,
      blood: this.signupData.blood,
      female: this.signupData.female,
      hostel: this.signupData.hostel,
      password: this.signupData.password,
      date: new Date().toLocaleString(),
      medicines: '',
      treatment: ''
    };

    
    this.http.post('https://retoolapi.dev/XeewL2/data', newUser).subscribe(
      response => {
        alert('Registration successful! Please login.');
        this.signupErrorMessage = '';
        this.showLogin(); 
      },
      error => {
        this.signupErrorMessage = 'Error during registration. Please try again.';
      }
    );
  }
}
