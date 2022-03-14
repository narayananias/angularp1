import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {Routes,RouterModule} from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { SubjectComponent } from './subject/subject.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { TestComponent } from './test/test.component';
import { ExamsComponent } from './exams/exams.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HelpspComponent } from './helpsp/helpsp.component';
const routes: Routes = [{path:'prof',component:ProfileComponent},{path:'att',component:AttendanceComponent},{path:'sub',component:SubjectComponent},{path:'assi',component:AssignmentComponent},{path:'test',component:TestComponent},{path:'univex',component:ExamsComponent},{path:'fedbck',component:FeedbackComponent},{path:'support',component:HelpspComponent}];
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AttendanceComponent,
    SubjectComponent,
    AssignmentComponent,
    TestComponent,
    ExamsComponent,
    FeedbackComponent,
    HelpspComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
