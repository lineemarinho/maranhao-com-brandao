import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
  navigate() {
    this.router.navigate(['/internal-news']);
  }
}
