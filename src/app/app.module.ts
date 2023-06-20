import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//PrimeNG
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//ngModel
import { FormsModule } from '@angular/forms';
//Reactive Forms
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CareerComponent } from './career/career.component';
import { CourseComponent } from './course/course.component';
import { NavComponent } from './nav/nav.component';

//PrimeNG
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radioButton';
import { SidebarModule } from 'primeng/sidebar';
import { InfoComponent } from './info/info.component';
import { TutoriallistComponent } from './tutoriallist/tutoriallist.component';
import { TutorialtableComponent } from './tutorialtable/tutorialtable.component';
import { CustompipePipe } from './custompipe.pipe';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { PhoneNumberValidatorDirective } from './phone-number-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CareerComponent,
    CourseComponent,
    NavComponent,
    InfoComponent,
    TutoriallistComponent,
    TutorialtableComponent,
    CustompipePipe,
    SignupComponent,
    SigninComponent,
    PhoneNumberValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    BrowserAnimationsModule,
    SidebarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
