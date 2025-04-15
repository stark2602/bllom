import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bloom',
  templateUrl: './bloom.component.html',
  styleUrls: ['./bloom.component.css']
})
export class BloomComponent {
  bloom = {
    name: '',
    psitid: '',
    hallCode: '',
    padsQuantity: 0,
    roomNumber: ''
  };
constructor( private router: Router) {}
  
  submitBloomRequest(form: NgForm) {
    if (form.valid) {
      console.log('Bloom Request Submitted:', this.bloom);
      alert('Your Bloom request has been submitted successfully!');
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
