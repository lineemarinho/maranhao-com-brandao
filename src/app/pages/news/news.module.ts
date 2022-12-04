import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NewsComponent } from './news.component';
import { ComponentsModule } from 'src/app/features/components.module';
import { NewsRoutingModule } from './news-routing.module';
@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
    NewsRoutingModule,
  ],
})
export class NewsModule {}
