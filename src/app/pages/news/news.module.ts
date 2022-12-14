import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NewsComponent } from './news.component';
import { ComponentsModule } from 'src/app/features/components.module';
import { NewsRoutingModule } from './news-routing.module';
import { NgImageSliderModule } from 'ng-image-slider';
@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
    NewsRoutingModule,
    NgImageSliderModule,
  ],
})
export class NewsModule {}
