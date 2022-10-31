import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { AddQuizComponent } from './components/add-quiz/add-quiz.component';
import { AddcategoryComponent } from './components/addcategory/addcategory.component';
import { AdminguardGuard } from './components/Authguard/adminguard.guard';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { LoadQuizComponent } from './components/load-quiz/load-quiz.component';
import { LoginComponent } from './components/login/login.component';
import { NormalguardGuard } from './components/Normaluser/normalguard.guard';
import { QuizComponent } from './components/quiz/quiz.component';
import { RegisterComponent } from './components/register/register.component';
import { StartquizComponent } from './components/startquiz/startquiz.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';
import { UpdateQuestionComponent } from './components/update-question/update-question.component';
import { UpdateQuizComponent } from './components/update-quiz/update-quiz.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ViewQuestionComponent } from './components/view-question/view-question.component';

const routes: Routes = [
  {path:"login", component:LoginComponent,pathMatch:"full"},
  {path:"register", component:RegisterComponent,pathMatch:"full"},
  {
    path:"home", 
    component:HomeComponent, 
    canActivate:[AdminguardGuard],
    children:[
      {path:"category", component:CategoryComponent},
      {path:"quiz",component:QuizComponent, },
      {path:"addcategory", component:AddcategoryComponent, },
      {path:"add-quiz", component: AddQuizComponent,},
      {path:"view-question/:id/:tittle", component:ViewQuestionComponent , },
      {path:"add-question/:id", component:AddQuestionComponent,},
      {path:"update-question/:id", component:UpdateQuestionComponent,},
      {path:"update-quiz/:id", component:UpdateQuizComponent,},
      {path:"update-category/:id", component:UpdateCategoryComponent,},
    ]
  },
  {
    path:"user-dashboard", 
    component:UserDashboardComponent,
    canActivate:[NormalguardGuard],
    children:[
      {path:"", component: LoadQuizComponent, canActivate:[NormalguardGuard]},
      {path:"startquiz/:id/:tittle/:maxMarks", component: StartquizComponent, canActivate:[NormalguardGuard]}
    ]
  }
 // {path:"category", component:CategoryComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
