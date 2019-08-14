import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class HomeComponent implements OnInit {
  images = ["./assets/paintings/growingDance/Painting-16.JPEG",
            "./assets/paintings/handMountains/Painting-5.JPEG",
            "./assets/paintings/treeForms/tree-forms.JPG",
            "./assets/photos/trio/natasha1.jpg"];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 900;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;


  ngOnInit() {
    console.log(this.images);
  }

}
