import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    pagination: false,
    spaceBetween: 20
  };

  slides = [
    {'heading': 'Hello, I am Kolor!',
      'image': '../assets/img/1.jpg',
      'text': 'Let is get you Started on Beauty and Creativity'  
    },
    {'heading': 'It is Nice to Meet You',
      'image': '../assets/img/2.jpg',
      'text': 'And they are Incredibly Easy to Use'  
    },
    {'heading': 'Tones of Features',
      'image': '../assets/img/3.jpg',
      'text': 'A Gorgeous User Interface and User Experience'  
    },

  ]

}
