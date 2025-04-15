import { Component,EventEmitter,Output} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() showLogin = new EventEmitter<void>();
  currentRoute: string = '';
  constructor(private router: Router, private activatedRute: ActivatedRoute) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

 
  navigateTo(page: string) {
    this.router.navigate(['/' + page]);
  }

}
