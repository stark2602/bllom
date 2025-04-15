import { Component } from '@angular/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent {
  services = [
    {
      title: 'Find a Doctor',
      description: 'Search for top-rated, verified doctors across various specialties and book instantly.'
    },
    {
      title: 'Book Appointments',
      description: 'Easily schedule in-person or online consultations with a doctor of your choice.'
    },
    {
      title: 'Online Consultation',
      description: 'Get medical advice and treatment through secure video consultations.'
    },
    {
      title: 'Nearby Hospitals',
      description: 'Locate hospitals and clinics closest to you with real-time availability.'
    },
    {
      title: 'Health Checkups',
      description: 'Choose preventive checkup packages and track your wellness regularly.'
    },
    {
      title: 'Reports & Downloads',
      description: 'Access and download your test reports and medical history anytime.'
    },
    {
      title: 'Bloom Support',
      description: 'Ask questions, get health tips, and chat with our support system anytime.'
    }
  ];
}
