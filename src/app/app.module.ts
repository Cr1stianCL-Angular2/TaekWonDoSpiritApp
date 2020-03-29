import { ContactanosComponent } from './components/spirit/contactanos/contactanos.component';
import { VisionComponent } from './components/spirit/vision/vision.component';
import { IntroduccionComponent } from './components/spirit/introduccion/introduccion.component';
import { GraduacionesComponent } from './components/spirit/graduaciones/graduaciones.component';
import { GaleriaComponent } from './components/spirit/galeria/galeria.component';
import { ExperienciasComponent } from './components/spirit/experiencias/experiencias.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { GalleryModule } from '@ngx-gallery/core';
/*
import {
  RECAPTCHA_V3_SITE_KEY,
  RecaptchaV3Module,
  RecaptchaModule,
} from 'ng-recaptcha';
*/
import {
  RecaptchaModule,
  RECAPTCHA_SETTINGS,
  RecaptchaSettings,
  RecaptchaFormsModule,
  RECAPTCHA_LANGUAGE,
} from 'ng-recaptcha';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgxGalleryModule } from 'ngx-gallery';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ExperienciasComponent,
    GaleriaComponent,
    GraduacionesComponent,
    IntroduccionComponent,
    VisionComponent,
    ContactanosComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
    NgxGalleryModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    GalleryModule.withConfig({}),
    ReactiveFormsModule,
    //AgmCoreModule.forRoot({  apiKey: 'AIzaSyAXibpiuBuc_QoBsjzwwVy2OAh4T-0RtPo' }),
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LfXhtMUAAAAAOvge8EQWDBOTdzRheA2FL14V72e',
      } as RecaptchaSettings,
    },
    { provide: RECAPTCHA_LANGUAGE, useValue: 'es' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
