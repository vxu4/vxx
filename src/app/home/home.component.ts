import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { routeUrls } from '../route-urls';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig],  // add NgbCarouselConfig to the component providers
  animations: [
    trigger('flyPosition', [
       transition('selected => left', [style({ transform: 'translateX(0)' }), animate('2s ease-out', style({ transform: 'translateX(-100%)' }))]),
        transition('selected => right', [style({ transform: 'translateX(0)' }), animate('2s ease-out', style({ transform: 'translateX(100%)' }))]),
        transition('left => selected', [style({ transform: 'translateX(-100%)' }), animate('2s ease-out', style({ transform: 'translateX(0)' }))]),
        transition('right => selected', [style({ transform: 'translateX(100%)' }), animate('2s ease-out', style({ transform: 'translateX(0)' }))]),
    ]),
    trigger('openClose', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('open => closed', [
        animate('.5s')
      ]),
      transition('closed => open', [
        animate('.1s .2s')
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit {
  images = ["./assets/photos/trio/natasha1.jpg",
  "./assets/paintings/growingDance/Painting-16.JPEG",
            "./assets/paintings/treeForms/tree-forms.JPG",
            "./assets/paintings/patterns/patterns.jpg",
            ];

  constructor(config: NgbCarouselConfig, private router: Router) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
  @Input() selected: boolean = false;
  flyPosition = 'right';
  displayPainting = false;
  isOpen = false;

  ngOnInit() {
    console.log(this.images);
  }

  onAnimationDone(event) {
    // hide a slide after animation completes
    if (event.fromState !== 'void' && event.toState !== 'selected' && this.flyPosition !== 'selected') {
        this.selected = false;
    }

    // set the flyPosition for the selected element when it's first displayed
    if (event.fromState === 'void' && this.selected) {
        this.flyPosition= "selected";
    }
  }

  select() {
      this.selected = true;
      this.flyPosition= "selected";
  }

  display(cat: string) {
    this.isOpen = !this.isOpen;
    this.displayPainting = !this.displayPainting;
  }

  navTo(cat: string) {
    if (cat === 'film') {
      this.router.navigateByUrl(routeUrls.filmAnimation);
    } else if (cat === 'painting') {
      this.router.navigateByUrl(routeUrls.paintings);
    } else if (cat === 'photos') {
      this.router.navigateByUrl(routeUrls.photos);
    } else if (cat === 'vr') {
      this.router.navigateByUrl(routeUrls.vr);
    } else if (cat === 'design') {
      this.router.navigateByUrl(routeUrls.design);
    }
  }
}
