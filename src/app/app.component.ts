import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { routeUrls } from './route-urls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('loader', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('open => closed', [
        animate('0s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ]
})

export class AppComponent {
  title = 'Victoria Xu';
  loading = false;
  constructor( private router: Router) {
    this.router.events.subscribe((event: Event) => {
      let startLoad;
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          startLoad = (new Date()).getTime;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          const loadTime = (new Date().getTime()) - startLoad;
          setTimeout(() => this.setLoading(false), 2500); // 2500 is millisecond
          break;
        }
        default: {
          break;
        }
      }
    });
  }
  navToHome() {
    this.router.navigateByUrl(routeUrls.home);
  }

  setLoading(val: boolean) {
    this.loading = val;
  }
}
