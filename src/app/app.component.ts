import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { routeUrls } from './route-urls';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor( private router: Router,
    private route: ActivatedRoute ) { }
    
  title = 'Victoria Xu';
  navToHome() {
    this.router.navigateByUrl(routeUrls.home);
  }
}
