import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/features/components.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
    HomeRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCUCKOtPg60JidCnAno8gBGm_Ge8M5AZDg',
      libraries: ['places'],
    }),
  ],
})
export class HomeModule {}
