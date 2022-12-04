import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { RouterModule, Routes } from '@angular/router';
import { NewsModule } from './pages/news/news.module';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { ProfileModule } from './pages/profile/profile.module';

registerLocaleData(localePt); //
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'news',
    loadChildren: () =>
      import('./pages/news/news.module').then((m) => m.NewsModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfileModule),
  },
];
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    HomeModule,
    LoginModule,
    NewsModule,
    ProfileModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  providers: [
    DatePipe,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
})
export class AppRoutingModule {
  constructor() {}
}
