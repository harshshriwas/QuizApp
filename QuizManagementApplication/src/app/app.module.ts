import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoryComponent } from './components/category/category.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { AddcategoryComponent } from './components/addcategory/addcategory.component';
import { AddQuizComponent } from './components/add-quiz/add-quiz.component';
import { ViewQuestionComponent } from './components/view-question/view-question.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { UpdateQuestionComponent } from './components/update-question/update-question.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { LoadQuizComponent } from './components/load-quiz/load-quiz.component';
import { StartquizComponent } from './components/startquiz/startquiz.component';
import { UpdateQuizComponent } from './components/update-quiz/update-quiz.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    QuizComponent,
    AddcategoryComponent,
    AddQuizComponent,
    ViewQuestionComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    UserDashboardComponent,
    LoadQuizComponent,
    StartquizComponent,
    UpdateQuizComponent,
    UpdateCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
