import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VRComponent } from './vr/vr.component';
import { PhotosComponent } from './photos/photos.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { FilmAnimationComponent } from './film-animation/film-animation.component';
import { SiwtcomhComponent } from './film-animation/siwtcomh/siwtcomh.component';
import { BlsComponent } from './film-animation/bls/bls.component';
import { BeluFindyComponent } from './film-animation/belu-findy/belu-findy.component';
import { DesignComponent } from './design/design.component';
import { routeUrls } from './route-urls';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
{ path: '', component: HomeComponent },
{ path: routeUrls.vr, component: VRComponent },
{ path: routeUrls.photos, component: PhotosComponent },
{ path: routeUrls.paintings, component: PaintingsComponent },
{ path: routeUrls.filmAnimation, component: FilmAnimationComponent },
{ path: routeUrls.hands, component: SiwtcomhComponent },
{ path: routeUrls.light, component: BlsComponent },
{ path: routeUrls.beluFindy, component: BeluFindyComponent },
{ path: routeUrls.design, component: DesignComponent },
{ path: routeUrls.none, component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
