import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './shared/components/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { UsersComponent } from './modules/users/users.component';
import { AuthGuard } from './security/auth.guard';
import { IsLoggedInGuard } from './security/is-logged-in.guard';
import { RegisterComponent } from './shared/components/register/register.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  canActivate: [AuthGuard],
  children: [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'posts',
    component: PostsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  }
],
}, {
  path: 'login',
  component: LoginComponent,
  canActivate: [IsLoggedInGuard]
},
{ path: 'register',
 component: RegisterComponent,
 canActivate: [IsLoggedInGuard]
 }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
