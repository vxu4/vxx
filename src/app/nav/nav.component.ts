import { Component, OnInit, ViewChild, ElementRef, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { routeUrls } from '../route-urls';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.7s')
      ]),
    ]),
    trigger('hoverEnlarge', [
      state('onHover', style({
        opacity: 1,
        width: '70px',
        marginRight: '12px',
        marginTop: '10px',
      })),
      state('offHover', style({
        opacity: 0.6,
        width: '60px',
        marginRight: '17px',
        marginTop: '15px',

      })),
      transition('onHover => offHover', [
        animate('0.5s')
      ]),
      transition('offHover => onHover', [
        animate('0.3s')
      ]),
    ]),
    trigger('hoverText', [
      state('onHover', style({
        opacity: 1,
        // display: 'inline',
        marginRight: '10px',
      })),
      state('offHover', style({
        opacity: 0,
        // display: 'none',
        marginLeft: '10px',

      })),
      transition('onHover => offHover', [
        animate('0.5s')
      ]),
      transition('offHover => onHover', [
        animate('0.3s')
      ]),
    ]), 
  ],
})
export class NavComponent implements OnInit {
  private d3: any;
  public error: string;
  isOpen = false;
  specific = false;
  specificPainting = false;
  specificFilm = false;
  specificPhotos = false;
  specificVR = false;
  specificDesign = false;

  hoverEnLargePainting = false;
  hoverEnLargePhotos = false;
  hoverEnLargeDesign = false;
  hoverEnLargeFilm = false;
  hoverEnLargeVR = false;

  constructor( private router: Router,
    private route: ActivatedRoute ) { }

  @ViewChild('content', {static: false}) content: ElementRef;


  ngOnInit() {
    this.d3 = window[ 'd3' ];
    if (!this.d3) {
      this.error = 'd3 is not initialized successfully';
      return;
    }
  }

  toggle() {
    if (!this.specific) {
      this.isOpen = !this.isOpen;
    }
    this.specificPainting = false;
    this.specific = false;
  }

  public handleMouseOver() {
    const d3 = this.d3;
      const circle = d3.select("#menu")
      circle
        .transition()
        .duration(250)
        // .delay(3)
        .attr("r", 50);
  }

  public handleMouseOut() {
    const d3 = this.d3;
      const circle = d3.select("#menu")
        .transition()
        .duration(250)
        // .delay(3)
        .attr("r", 40);
  }

  public hoverEnlarge(category: string) {
    if (category === 'painting') {
      this.hoverEnLargePainting = !this.hoverEnLargePainting;
    } else if (category === 'photos') {
      this.hoverEnLargePhotos = !this.hoverEnLargePhotos;
    } else if (category === 'film') {
      this.hoverEnLargeFilm = !this.hoverEnLargeFilm;
    } else if (category === 'design') {
      this.hoverEnLargeDesign = !this.hoverEnLargeDesign;
    } else if (category === 'vr') {
      this.hoverEnLargeVR = !this.hoverEnLargeVR;
    }
  }

  navToPainting() {
    this.specific = !this.specific;
    this.specificPainting = !this.specificPainting;
    this.hoverEnLargePainting = !this.hoverEnLargePainting;
    this.router.navigateByUrl(routeUrls.paintings);
  }

  navToFilm() {
    this.specific = !this.specific;
    this.specificFilm = !this.specificFilm;
    this.hoverEnLargeFilm = !this.hoverEnLargeFilm;
    this.router.navigateByUrl(routeUrls.filmAnimation);
  }

  navToDesign() {
    this.specific = !this.specific;
    this.specificDesign = !this.specificDesign;
    this.hoverEnLargeDesign = !this.hoverEnLargeDesign;
    this.router.navigateByUrl(routeUrls.design);
  }

  navToPhotos() {
    this.specific = !this.specific;
    this.specificPhotos = !this.specificPhotos;
    this.hoverEnLargePhotos = !this.hoverEnLargePhotos;
    this.router.navigateByUrl(routeUrls.photos);
  }

  navToVR() {
    this.specific = !this.specific;
    this.specificVR = !this.specificVR;
    this.hoverEnLargeVR = !this.hoverEnLargeVR;
    this.router.navigateByUrl(routeUrls.vr);
  }

}
