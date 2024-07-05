import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PnfComponent } from './pnf/pnf.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { PostsComponent } from './posts/posts.component';
import { PostdetailComponent } from './postdetail/postdetail.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'user',component:UserComponent},
  {path:'user/:id',component:UserdetailComponent},
  {path:'post',component:PostsComponent,canActivate:[authGuard]},
  {path:'post/:id',component:PostdetailComponent},
  //{path:'',redirectTo:'/home',pathMatch:'full'},//only /home
  {path:'',redirectTo:(url)=>{console.log('auto redirect',url); return '/home'},pathMatch:'prefix'},//it allows /home /homes /home/abc
  {path:'**',component:PnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
