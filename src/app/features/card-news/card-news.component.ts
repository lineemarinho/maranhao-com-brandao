import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleModalService } from 'ngx-simple-modal';
import { FavoriteComponent } from '../favorite/favorite.component';
@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.scss'],
})
export class CardNewsComponent implements OnInit {
  constructor(
    public router: Router,
    private SimpleModalService: SimpleModalService
  ) {}

  ngOnInit(): void {}

  navigate() {
    this.router.navigate(['/news']);
  }
  openFavorite(transaction?: any) {
    this.SimpleModalService.addModal(FavoriteComponent, {
      data: {
        transaction: transaction,
      },
    });
  }
}
