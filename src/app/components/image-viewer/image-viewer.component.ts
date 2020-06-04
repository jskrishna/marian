import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
})
export class ImageViewerComponent implements OnInit {

  @Input() images;
  @Input() index;

  image;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log("images", this.images);
    console.log("index", this.index);
    this.image = this.images[this.index];
  }

  next(){
    //debugger;
    let index = this.index;

    if( index < this.images.length){
      this.index ++;
      this.image = this.images[this.index];
    }
  }

  prev(){
    //debugger;
    let index = this.index;
    if( index > 0){
      this.index --;
      this.image = this.images[this.index];
    }
  }

    close(){
      this.modalCtrl.dismiss({
        'dismissed': true
      });
    }
  

}
