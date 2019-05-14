import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Route } from '@angular/router';
import { CoursesList } from './courses-list.component';
import { AllLessons } from './all-lessons.component';
import { Courses } from './courses.component';
import { LessonsList } from './lessons-list.component';

const INDEX_ROUTE: Route = {
  path: '',
  component: HomeComponent
}

const FALLBACK_ROUTE: Route = {
  path: '**',
  component: AllLessons
}

export const routeConfig = [
  INDEX_ROUTE,
  FALLBACK_ROUTE,
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'courses',
    component: Courses
  },
  {
    path: 'lessons',
    component: AllLessons
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesList,
    AllLessons,
    Courses,
    LessonsList
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
