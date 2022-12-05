import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-internal-news',
  templateUrl: './internal-news.component.html',
  styleUrls: ['./internal-news.component.scss'],
})
export class InternalNewsComponent implements OnInit {
  listSelo = [
    {
      link: '',
      icon: 'educacao',
    },
    {
      link: '',
      icon: 'saudeesaneamento',
    },
    {
      link: '',
      icon: 'trabalhoerenda',
    },
  ];
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
  imageObject: Array<object> = [
    {
      image: 'assets/images/obra1.jpeg',
      thumbImage: 'assets/images/obra1.jpeg',
      title: 'Titulo da imagem',
      alt: 'Obras',
    },
    {
      video: 'https://www.youtube.com/watch?v=Nwn_lL4vX_E',
      posterImage: 'https://www.youtube.com/watch?v=Nwn_lL4vX_E',
      title: 'Titulo do video',
    },
    {
      image: 'assets/images/obra3.jpeg',
      thumbImage: 'assets/images/obra3.jpeg',
      title: 'Titulo da imagem',
      alt: 'Obras',
    },
    {
      image: 'assets/images/obra1.jpeg',
      thumbImage: 'assets/images/obra1.jpeg',
      title: 'Titulo da imagem',
      alt: 'Obras',
    },
    {
      image: 'assets/images/obra2.jpeg',
      thumbImage: 'assets/images/obra2.jpeg',
      title: 'Titulo da imagem',
      alt: 'Obras',
    },
  ];
  constructor(public router: Router) {}

  ngOnInit(): void {}
  back() {
    this.router.navigate(['/']);
  }
}
