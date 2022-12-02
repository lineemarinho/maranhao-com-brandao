import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  socialMediaList = [
    {
      link: '',
      icon: 'facebook',
    },
    {
      link: '',
      icon: 'instagram',
    },
    {
      link: '',
      icon: 'youtube',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
