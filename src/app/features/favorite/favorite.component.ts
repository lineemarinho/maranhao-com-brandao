import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface AlertModel {
  data: any;
}

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent
  extends SimpleModalComponent<AlertModel, null>
  implements AlertModel
{
  data: any;

  constructor() {
    super();
  }
}
