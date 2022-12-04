import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() construction: boolean = false;
  constructor(public router: Router) {}

  ngOnInit(): void {}

  navigate() {
    this.router.navigate(['/login']);
  }
  home() {
    this.router.navigate(['/']);
  }
}
