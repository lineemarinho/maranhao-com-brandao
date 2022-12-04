import { RouterModule } from '@angular/router';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmphasisComponent } from './emphasis/emphasis.component';
import { CategoryComponent } from './category/category.component';
import { CardNewsComponent } from './card-news/card-news.component';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    EmphasisComponent,
    CategoryComponent,
    CardNewsComponent,
    FavoriteComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    EmphasisComponent,
    CategoryComponent,
    CardNewsComponent,
    FavoriteComponent,
  ],
  entryComponents: [
    HeaderComponent,
    FooterComponent,
    EmphasisComponent,
    CategoryComponent,
    CardNewsComponent,
    FavoriteComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ComponentsModule {}
