import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/features/components.module';
import { SearchNewsComponent } from './search-news.component';
import { SearchNewsRoutingModule } from './search-news-routing.module';
@NgModule({
  declarations: [SearchNewsComponent],
  imports: [
    CommonModule,
    SearchNewsRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
})
export class SearchNewsModule {}
