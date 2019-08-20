import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routeUrls } from '../route-urls';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navToBD() {
    this.router.navigateByUrl(routeUrls.greenhouse);
  }

  navToTrio() {
    this.router.navigateByUrl(routeUrls.trio);
  }
}
