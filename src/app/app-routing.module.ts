import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './search/sidebar/sidebar/sidebar.component';
import { UserLogInComponent } from './user/user login panel/user-login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },

  {
    path: 'menuSections',
    component: SidebarComponent,
    pathMatch: 'prefix',

  },
  {
    path: 'login',
    component: UserLogInComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),

  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
