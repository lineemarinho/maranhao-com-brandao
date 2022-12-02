import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.scss'],
})
export class CardNewsComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  navigate() {
    this.router.navigate(['/news']);
  }
}
