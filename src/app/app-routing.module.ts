import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routeUrls } from './route-urls';
import { HomeComponent } from './home/home.component';

import { VRComponent } from './vr/vr.component';

import { PhotosComponent } from './photos/photos.component';

import { PaintingsComponent } from './paintings/paintings.component';
import { HsComponent } from './paintings/hs/hs.component';
import { LandHandsComponent } from './paintings/land-hands/land-hands.component';
import { PatternsComponent } from './paintings/patterns/patterns.component';
import { GrowingDanceComponent } from './paintings/growing-dance/growing-dance.component';


import { FilmAnimationComponent } from './film-animation/film-animation.component';
import { SiwtcomhComponent } from './film-animation/siwtcomh/siwtcomh.component';
import { BlsComponent } from './film-animation/bls/bls.component';
import { BeluFindyComponent } from './film-animation/belu-findy/belu-findy.component';
import { AmapComponent } from './film-animation/amap/amap.component';
import { NewmoonComponent } from './film-animation/newmoon/newmoon.component';
import { RushingWorldComponent } from './film-animation/rushing-world/rushing-world.component';
import { RedVrComponent } from './film-animation/red-vr/red-vr.component';

import { DesignComponent } from './design/design.component';
import { GreenhouseComponent } from './photos/greenhouse/greenhouse.component';
import { TrioComponent } from './photos/trio/trio.component';




const appRoutes: Routes = [
{ path: '', component: HomeComponent },

{ path: routeUrls.vr, component: VRComponent },

{ path: routeUrls.photos, component: PhotosComponent },
{ path: routeUrls.greenhouse, component: GreenhouseComponent },
{ path: routeUrls.trio, component: TrioComponent },


{ path: routeUrls.paintings, component: PaintingsComponent },
{ path: routeUrls.landHands, component: LandHandsComponent },
{ path: routeUrls.hs, component: HsComponent },
{ path: routeUrls.patterns, component: PatternsComponent },
{ path: routeUrls.growingDance, component: GrowingDanceComponent },

{ path: routeUrls.filmAnimation, component: FilmAnimationComponent },
{ path: routeUrls.hands, component: SiwtcomhComponent },
{ path: routeUrls.light, component: BlsComponent },
{ path: routeUrls.beluFindy, component: BeluFindyComponent },
{ path: routeUrls.aMap, component: AmapComponent },
{ path: routeUrls.newMoon, component: NewmoonComponent },
{ path: routeUrls.rushing, component: RushingWorldComponent },
{ path: routeUrls.redVr, component: RedVrComponent },

{ path: routeUrls.design, component: DesignComponent },

{ path: routeUrls.none, component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
