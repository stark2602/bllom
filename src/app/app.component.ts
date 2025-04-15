import { Component } from '@angular/core';
import { SpinnerService } from 'src/services/spinner.services';
import { Subject, filter, takeUntil } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'med-app';
  isIframe = false;
  loginDisplay = false;
  private readonly _destroying$ = new Subject<void>();

  constructor(public spinnerService: SpinnerService,
    // @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    // private authService: MsalService,
    // private msalBroadcastService: MsalBroadcastService
) { }
  ngOnInit(): void {
  }
}
