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
import * as d3 from 'd3';

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
    trigger('fullOverlay', [
      state('open', style({
        width: '70%',
      })),
      state('closed', style({
        width: '0%',
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.7s')
      ]),
    ]),
  ],
})
export class NavComponent implements OnInit {
  private d3: any;
  public error: string;
  isOpen = false;
  fullOver = false;

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

  constructor( private router: Router) { }

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
    this.specificFilm = false;
    this.specificDesign = false;
    this.specificPhotos = false;
    this.specificVR = false;
    this.specific = false;
  }

  fullscreenOverlay() {
    this.fullOver = !this.fullOver;
  }

  public handleMouseOver() {
      const circle = d3.select('#menu');
      circle
        .transition()
        .duration(250)
        // .delay(3)
        .attr('r', 50);
  }

  public handleMouseOut() {
      const circle = d3.select('#menu');
      circle
        .transition()
        .duration(250)
        // .delay(3)
        .attr('r', 40);
  }

  public handleMouseOverMobile() {
    const circle = d3.select('#menuMobile');
    circle
      .transition()
      .duration(250)
      // .delay(3)
      .attr('r', 40);
}

public handleMouseOutMobile() {
    const circle = d3.select('#menuMobile');
    circle
      .transition()
      .duration(250)
      // .delay(3)
      .attr('r', 30);
}

  public hoverEnlarge(category: string) {
    if (category === 'painting') {
      if (!this.specificPainting) {
        this.hoverEnLargePainting = !this.hoverEnLargePainting;
      } else {
        this.hoverEnLargePainting = true;
      }
    } else if ((category === 'photos') && (!this.specificPhotos)) {
      this.hoverEnLargePhotos = !this.hoverEnLargePhotos;
    } else if ((category === 'film') && (!this.specificFilm)) {
      this.hoverEnLargeFilm = !this.hoverEnLargeFilm;
    } else if ((category === 'design') && (!this.specificDesign)) {
      this.hoverEnLargeDesign = !this.hoverEnLargeDesign;
    } else if ((category === 'vr') && (!this.specificVR)) {
      this.hoverEnLargeVR = !this.hoverEnLargeVR;
    }
  }

  cancelOtherHovers(cat: string) {
    if (cat !== 'painting') {
      this.hoverEnLargePainting = false;
    }
    if (cat !== 'vr') {
      this.hoverEnLargeVR = false;
    }
    if (cat !== 'design') {
      this.hoverEnLargeDesign = false;
    }
    if (cat !== 'photos') {
      this.hoverEnLargePhotos = false;
    }
    if (cat !== 'film') {
      this.hoverEnLargeFilm = false;
    }
  }

  navToPainting(isMobile?: string) {
    if (this.isOpen || isMobile) {
      this.specific = true;
      this.specificPainting = true;
      this.router.navigateByUrl(routeUrls.paintings);
      this.cancelOtherHovers('painting');
      this.fullOver = !this.fullOver;
    }
  }

  navToFilm(isMobile?: string) {
    if (this.isOpen || isMobile) {
      this.specific = true;
      this.specificFilm = true;
      this.router.navigateByUrl(routeUrls.filmAnimation);
      this.cancelOtherHovers('film');
      this.fullOver = !this.fullOver;
    }
  }

  navToDesign(isMobile?: string) {
    if (this.isOpen || isMobile) {
      this.specific = true;
      this.specificDesign = true;
      this.router.navigateByUrl(routeUrls.design);
      this.cancelOtherHovers('design');
      this.fullOver = !this.fullOver;
    }
  }

  navToPhotos(isMobile?: string) {
    if (this.isOpen || isMobile) {
      this.specific = true;
      this.specificPhotos = true;
      this.router.navigateByUrl(routeUrls.photos);
      this.cancelOtherHovers('photos');
      this.fullOver = !this.fullOver;

    }
  }

  navToVR(isMobile?: string) {
    if (this.isOpen || isMobile) {
      this.specific = true;
      this.specificVR = true;
      this.router.navigateByUrl(routeUrls.vr);
      this.cancelOtherHovers('vr');
      this.fullOver = !this.fullOver;

    }
  }
}
