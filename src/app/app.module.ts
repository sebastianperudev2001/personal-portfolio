import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopbarComponent } from './topbar/topbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MaterialExampleModule } from 'src/material.module';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    MainPageComponent,
    ExperienceComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialExampleModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MainPageComponent,
    ExperienceComponent
  ]
})
export class AppModule { }
