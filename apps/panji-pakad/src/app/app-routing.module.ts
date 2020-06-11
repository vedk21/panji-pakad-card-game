import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationComponent } from './views/authentication/authentication.component';

const routes = [
  {
    path: '', redirectTo: 'auth', pathMatch: 'full'
  },
  {
    path: 'auth', component: AuthenticationComponent, children: [
      {
        path: 'login', loadChildren: () => import(`./views/authentication/login/login.module`).then(m => m.LoginModule)
      },
      {
        path: 'home', loadChildren: () => import(`./views/authentication/home/home.module`).then(m => m.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
