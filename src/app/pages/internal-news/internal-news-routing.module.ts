import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalNewsComponent } from './internal-news.component';

const routes: Routes = [
  {
    path: '',
    component: InternalNewsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternalNewsRoutingModule {}
