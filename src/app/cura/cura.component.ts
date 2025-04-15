import { Component } from '@angular/core';

@Component({
  selector: 'app-cura',
  templateUrl: './cura.component.html',
  styleUrls: ['./cura.component.css']
})
export class CuraComponent {
  userInput = '';
  chatHistory: { from: string; message: string }[] = [];

  predefinedAnswers: { keywords: string[], response: string }[] = [
    { keywords: ['your name'], response: 'I’m CURA, your personal assistant at BloomCare!' },
    { keywords: ['created you'], response: 'I was developed by the BloomCare team to support your health needs.' },
    { keywords: ['book appointment'], response: 'Head to the Book Appointment section and fill out the form with your details.' },
    { keywords: ['cancel appointment'], response: 'Currently, cancellations must be done directly at the health center.' },
    { keywords: ['reschedule appointment'], response: 'Visit the hospital desk and request rescheduling.' },
    { keywords: ['request sanitary', 'pads'], response: 'Go to the Bloom section, enter your hall and room number, and submit a request.' },
    { keywords: ['where', 'health center'], response: 'Our health center is located in the Main BloomCare Complex.' },
    { keywords: ['services available'], response: 'Appointments, Blood Reports, Health Checkups, Consultations, Bloom Support, and more!' },
    { keywords: ['id', 'appointment'], response: 'Yes, please provide your registered BloomCare ID.' },
    { keywords: ['female doctor'], response: 'Of course! You can request a female doctor during booking.' },
    { keywords: ['view', 'blood report'], response: 'Visit the Reports section to view or download your blood report.' },
    { keywords: ['download report'], response: 'Open your report and click the Download as PDF option.' },
    { keywords: ['previous appointments'], response: 'Go to the Appointment History section on your dashboard.' },
    { keywords: ['chronic history'], response: 'It’s a record of past diseases, treatments, and medications.' },
    { keywords: ['view chronic'], response: 'Head to the Chronic History tab in your profile.' },
    { keywords: ['upload report'], response: 'Yes! Go to the Reports page and upload your file (PDF supported).' },
    { keywords: ['bloom section'], response: 'You’ll find it on the dashboard – it handles female wellness support.' },
    { keywords: ['submit bloom', 'anonymous'], response: 'Yes, requests can be submitted confidentially.' },
    { keywords: ['contact health center'], response: 'Use the Contact Us section or call the listed number.' },
    { keywords: ['fever'], response: 'Stay hydrated, rest well, and book a General Medicine appointment if needed.' },
    { keywords: ['mental health'], response: 'Book under Mental Health in the Appointment section.' },
    { keywords: ['bloom request', 'after'], response: 'You\'ll get updates in your dashboard once it’s reviewed.' },
    { keywords: ['blood group'], response: 'Yes, it’s listed in your profile under Personal Details.' },
    { keywords: ['update details'], response: 'Contact the admin team via the Profile section.' },
    { keywords: ['medical data safe'], response: 'Absolutely. Your data is securely stored and accessed only by authorized staff.' },
    { keywords: ['logout'], response: 'Click on your profile image and select Logout.' },
    { keywords: ['where', 'chatbot'], response: 'You’ll see the CURA icon floating on your screen. Click it to chat!' },
    { keywords: ['speak to doctor online'], response: 'Go to Online Consultation and select an available time.' },
    { keywords: ['skin treatment'], response: 'Yes! Choose Dermatology in the appointment form.' },
    { keywords: ['filter', 'blood reports'], response: 'Yes. Use your BloomCare ID to filter your reports.' },
    { keywords: ['request checkup'], response: 'Visit the Health Checkups section and book based on your concern.' },
    { keywords: ['delete report'], response: 'Contact the BloomCare team to request deletion.' },
    { keywords: ['bring friend'], response: 'Yes, you can be accompanied if needed.' },
    { keywords: ['reports mobile'], response: 'Definitely! The portal works seamlessly on mobile too.' },
    { keywords: ['bloomcare id'], response: 'It’s your unique ID to access all your health records.' },
    { keywords: ['pharmacy'], response: 'Yes, it’s located inside the BloomCare hospital.' },
    { keywords: ['miss', 'appointment'], response: 'Please book again or notify staff for rescheduling.' },
    { keywords: ['appointment status'], response: 'It’s displayed under Appointments on your dashboard.' },
    { keywords: ['speak to nurse'], response: 'Yes, during working hours via the hospital front desk.' },
    { keywords: ['wheelchair'], response: 'Yes, just ask for it at the hospital entrance.' },
    { keywords: ['workshops'], response: 'Yes! Check announcements in your dashboard.' },
    { keywords: ['printed report'], response: 'Yes, visit the medical desk to get a hard copy.' },
    { keywords: ['emergency'], response: 'Call the emergency contact listed on the homepage.' },
    // You can keep adding more here following the same structure
  ];

  sendMessage() {
    if (this.userInput.trim()) {
      const input = this.userInput.trim().toLowerCase();
      this.chatHistory.push({ from: 'user', message: this.userInput });

      let matchedResponse = "I'm sorry, I don't understand that. Try another question.";

      for (const entry of this.predefinedAnswers) {
        const matched = entry.keywords.every(keyword => input.includes(keyword));
        if (matched) {
          matchedResponse = entry.response;
          break;
        }
      }

      this.chatHistory.push({ from: 'bot', message: matchedResponse });
      this.userInput = '';
    }
  }
}
