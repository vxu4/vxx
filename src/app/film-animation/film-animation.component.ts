import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routeUrls } from '../route-urls';


@Component({
  selector: 'app-film-animation',
  templateUrl: './film-animation.component.html',
  styleUrls: ['./film-animation.component.scss']
})
export class FilmAnimationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navToHands() {
    this.router.navigateByUrl(routeUrls.hands);
  }

  navToLight() {
    this.router.navigateByUrl(routeUrls.light);
  }

  navToBeluFindy() {
    this.router.navigateByUrl(routeUrls.beluFindy);
  }
}
