import { Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { WritingComponent } from "./pages/writing/writing.component";
import { ContactMeComponent } from "./pages/contact-me/contact-me.component";
import { OpinionPieceComponent } from "./pages/writing/opinion-piece/opinion-piece.component";
import {TravelComponent} from "./pages/writing/travel/travel.component";
import {ArtComponent} from "./pages/art/art.component";
import {WebComponent} from "./pages/web/web.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.compponent";
import {PrivacyPolicyComponent} from "./pages/privacy-policy/privacy-policy.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'writing',
    component: WritingComponent
  },
  {
    path: 'web-works',
    component: WebComponent
  },
  {
    path: 'writing/opinion-pieces/:title',
    component: OpinionPieceComponent
  },
  {
    path: 'writing/travel/:title',
    component: TravelComponent
  },
  {
    path: 'art',
    component: ArtComponent
  },
  {
    path: 'contact-me',
    component: ContactMeComponent
  },
  {
    path: 'privacy-policy',
    component:PrivacyPolicyComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
