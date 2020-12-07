import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './modules/profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { IntroComponent } from './components/intro/intro.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ContactComponent } from './components/contact/contact.component';
import { LittleaboutmeComponent } from './components/littleaboutme/littleaboutme.component';
import { EducationComponent } from './components/education/education.component';
import { WorkItemComponent } from './components/work-item/work-item.component';
import { ExperienceComponent } from './components/experience/experience.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    IntroComponent,
    ContactComponent,
    LittleaboutmeComponent,
    EducationComponent,
    WorkItemComponent,
    ExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
