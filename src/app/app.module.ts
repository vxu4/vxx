import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilmAnimationComponent } from './film-animation/film-animation.component';
import { PhotosComponent } from './photos/photos.component';
import { VRComponent } from './vr/vr.component';
import { DesignComponent } from './design/design.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { HomeComponent } from './home/home.component';
import {NgbModule, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { SiwtcomhComponent } from './film-animation/siwtcomh/siwtcomh.component';
import { BlsComponent } from './film-animation/bls/bls.component';
import { BeluFindyComponent } from './film-animation/belu-findy/belu-findy.component';



const appRoutes: Routes = [
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavComponent,
    FilmAnimationComponent,
    PhotosComponent,
    VRComponent,
    DesignComponent,
    PaintingsComponent,
    HomeComponent,
    SiwtcomhComponent,
    BlsComponent,
    BeluFindyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
