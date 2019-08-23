import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routeUrls } from '../route-urls';

@Component({
  selector: 'app-vr',
  templateUrl: './vr.component.html',
  styleUrls: ['./vr.component.scss']
})
export class VRComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navToApo() {
    this.router.navigateByUrl(routeUrls.apo);
  }

  navToProjections() {
    this.router.navigateByUrl(routeUrls.projections);
  }

  navToRed() {
    this.router.navigateByUrl(routeUrls.redVr);
  }

  navToRushing() {
    this.router.navigateByUrl(routeUrls.rushing);
  }
}
