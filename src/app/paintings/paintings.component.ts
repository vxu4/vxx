import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routeUrls } from '../route-urls';

@Component({
  selector: 'app-paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.scss']
})
export class PaintingsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navToHS() {
    this.router.navigateByUrl(routeUrls.hs);
  }

}
