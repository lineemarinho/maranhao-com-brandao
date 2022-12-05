import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/features/components.module';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
})
export class AboutModule {}
