import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { EditUserComponent } from './viewprofil/edit-user.component';

const routes: Routes = [
  {
    path:'auth',
    component:AuthComponent,
    children:[
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {path:'customer_list',component:CustomerlistComponent},
      {path:'edituser',component:EditUserComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
