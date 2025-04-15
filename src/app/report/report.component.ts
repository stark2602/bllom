import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loadGapiInsideDOM } from 'gapi-script';
import { Router } from '@angular/router';
declare var gapi: any;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  reports: any[] = [];
  selectedFile: File | null = null;
  editMode = false;
  currentReportId: number | null = null;
  username: string | null = '';
  // Replace with your actual Google credentials
  private API_KEY = 'AIzaSyAFpPAHr-bDom0NjN_iIiGAoPa8qar5hZU';
  private CLIENT_ID = '668944404690-8v6jfh9oh81p6iv5sgudtc64a6lh3epg.apps.googleusercontent.com';
  private SCOPES = 'https://www.googleapis.com/auth/drive.file';

  constructor(private http: HttpClient, private router:Router) {}

  async ngOnInit() {
    await loadGapiInsideDOM();
    await this.initGoogleDrive();
    this.getReports();
    this.username = sessionStorage.getItem('username');
  }

  async initGoogleDrive() {
    return new Promise<void>((resolve, reject) => {
      gapi.load('client:auth2', async () => {
        try {
          await gapi.client.init({
            apiKey: this.API_KEY,
            clientId: this.CLIENT_ID,
            discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
            scope: this.SCOPES
          });
          await gapi.auth2.getAuthInstance().signIn();
          resolve();
        } catch (error) {
          console.error('Google Drive init error:', error);
          reject(error);
        }
      });
    });
  }

  getUserName(): string {
    const currentUser = gapi.auth2.getAuthInstance().currentUser.get();
    return currentUser.getBasicProfile().getName();
  }

  getReports() {
    const psitId = sessionStorage.getItem('psitId'); // assumes psitId is stored on login
    this.http.get<any[]>('https://retoolapi.dev/fWs7no/data').subscribe(data => {
      this.reports = data.filter(report => report.phone === psitId);
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  async uploadReport(patientId: string, reportDate: string) {
    if (!this.selectedFile) return;

    try {
      const userName = this.getUserName();
      const fileId = await this.uploadToDrive(this.selectedFile);
      const reportData = {
        phone: patientId,
        reportDate,
        driveFileId: fileId,
        userName
      };

      if (this.editMode && this.currentReportId) {
        await this.http.put(`https://retoolapi.dev/fWs7no/data/${this.currentReportId}`, reportData).toPromise();
      } else {
        await this.http.post('https://retoolapi.dev/fWs7no/data', reportData).toPromise();
      }

      this.getReports();
      this.resetForm();
    } catch (error) {
      console.error('Upload error:', error);
    }
  }

  async uploadToDrive(file: File): Promise<string> {
    const accessToken = gapi.auth.getToken().access_token;
    const metadata = {
      name: file.name,
      mimeType: file.type
    };

    const form = new FormData();
    form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    form.append('file', file);

    const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id', {
      method: 'POST',
      headers: new Headers({ 'Authorization': 'Bearer ' + accessToken }),
      body: form
    });

    const data = await response.json();
    return data.id;
  }

  deleteReport(id: number) {
    this.http.delete(`https://retoolapi.dev/fWs7no/data/${id}`).subscribe(() => {
      this.getReports();
    });
  }

  editReport(report: any) {
    this.editMode = true;
    this.currentReportId = report.id;
  }

  resetForm() {
    this.selectedFile = null;
    this.editMode = false;
    this.currentReportId = null;
  }

  getDriveFileUrl(fileId: string): string {
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
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
