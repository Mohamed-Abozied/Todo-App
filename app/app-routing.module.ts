import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SignupComponent } from './views/auth/signup/signup.component';
import { SigninComponent } from './views/auth/signin/signin.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'form/:id',
    component: TodoFormComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
