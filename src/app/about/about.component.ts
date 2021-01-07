import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title: string = 'About';
  name: string;
  info: Object ;
  age: number;
  profile = './assets/images/journey/0.jpg';

  picIndex = 0;

  picture = [
    './assets/images/journey/1.jpg',
    './assets/images/journey/2.jpg',
    './assets/images/journey/3.jpg',
    './assets/images/journey/4.jpg',
    './assets/images/journey/5.jpg',
    './assets/images/journey/6.jpg',
    './assets/images/journey/7.jpg',
    './assets/images/journey/8.jpg',
    './assets/images/journey/9.jpg',
    './assets/images/journey/10.jpg',
    './assets/images/journey/12.jpg',
    './assets/images/journey/13.jpg',
    './assets/images/journey/14.jpg',
    './assets/images/journey/15.jpg',
    './assets/images/journey/16.jpg',
    './assets/images/journey/17.jpg'
    
];
imgWidth = 500;
isShow = false;

  constructor() {
    this.age = 32;
    this.info = {
      email: 'frank@gmail.com',
      skill: 'Tongue'
    };

   }

  ngOnInit() {
    this.name = 'Christy Kee';
  }

  next() {
    if (this.picIndex >= this.picture.length) {
      this.picIndex = 0;
    }
    this.profile = this.picture[this.picIndex++];
  }

}
