import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './search/sidebar/sidebar/sidebar.component';
import { EmptyCartComponent } from './pages/empty-cart/empty-cart.component';
import { UserSignUpComponent } from './user/user sign up panel/user-signup.component';
import { TermsComponent } from './pages/terms/terms.component';

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
    path: 'empty-cart',
    component: EmptyCartComponent,
  },
  {
    path: 'terms',
    component:TermsComponent,

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
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },

  {
    path: 'register',
    component: UserSignUpComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/login',
  }, // مسیر ناموجود
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
