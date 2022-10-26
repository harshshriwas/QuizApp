import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuizComponent } from './components/add-quiz/add-quiz.component';
import { AddcategoryComponent } from './components/addcategory/addcategory.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewQuestionsComponent } from './components/view-questions/view-questions.component';

const routes: Routes = [
  {path:"login", component:LoginComponent,pathMatch:"full"},
  {path:"register", component:RegisterComponent,pathMatch:"full"},
  {
    path:"home", 
    component:HomeComponent, 
    children:[
      {path:"category", component:CategoryComponent},
      { path:"quiz",component:QuizComponent },
      {path:"addcategory", component:AddcategoryComponent},
      {path:"add-quiz", component: AddQuizComponent},
      {path:"view-question", component: ViewQuestionsComponent}
    ]
  },
 // {path:"category", component:CategoryComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
