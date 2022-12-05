import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/features/components.module';
import { NgImageSliderModule } from 'ng-image-slider';
import { InternalNewsComponent } from './internal-news.component';
import { InternalNewsRoutingModule } from './internal-news-routing.module';
@NgModule({
  declarations: [InternalNewsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
    InternalNewsRoutingModule,
    NgImageSliderModule,
  ],
})
export class InternalNewsModule {}
