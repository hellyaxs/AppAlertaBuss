import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componemts/home/home.component';
import { LoginComponent } from './componemts/Login/login/login.component';

const routes: Routes = [
  {path:"" , component:LoginComponent ,pathMatch:"full"},
  {path:"home", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
