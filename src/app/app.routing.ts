import { ContactanosComponent } from './components/spirit/contactanos/contactanos.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { VisionComponent } from './components/spirit/vision/vision.component';
import { IntroduccionComponent } from './components/spirit/introduccion/introduccion.component';
import { GraduacionesComponent } from './components/spirit/graduaciones/graduaciones.component';
import { GaleriaComponent } from './components/spirit/galeria/galeria.component';
import { ExperienciasComponent } from './components/spirit/experiencias/experiencias.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ComponentsComponent, pathMatch: 'full' },
  //{ path: 'navbar',             component: NavbarComponent },
  //{ path: 'user-profile',     component: ProfileComponent },
  //{ path: 'signup',           component: SignupComponent },
  //{ path: 'landing',          component: LandingComponent },
  { path: 'experiencias', component: ExperienciasComponent, pathMatch: 'full' },
  { path: 'galeria', component: GaleriaComponent, pathMatch: 'full' },
  { path: 'graduaciones', component: GraduacionesComponent, pathMatch: 'full' },
  { path: 'introduccion', component: IntroduccionComponent, pathMatch: 'full' },
  { path: 'vision', component: VisionComponent, pathMatch: 'full' },
  { path: 'contactanos', component: ContactanosComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
