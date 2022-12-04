import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lat = 22.2736308;
  long = 70.7512555;

  constructor() {}

  ngOnInit(): void {}
}
