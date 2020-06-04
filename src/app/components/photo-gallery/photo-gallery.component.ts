import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { ModalController } from "@ionic/angular";
import { ImageViewerComponent } from "../image-viewer/image-viewer.component";

@Component({
  selector: "app-photo-gallery",
  templateUrl: "./photo-gallery.component.html",
  styleUrls: ["./photo-gallery.component.scss"],
})
export class PhotoGalleryComponent implements OnInit {
  images = [
    { url: "../assets/img/1.jpg", type: "nature" },
    { url: "../assets/img/2.jpg", type: "food" },
    { url: "../assets/img/3.jpg", type: "tech" },
  ];

  displayImages = [];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    Object.assign(this.displayImages, this.images);
  }

  filterImages(type) {
    this.displayImages.length = 0;

    if (type == "all") Object.assign(this.displayImages, this.images);
    else {
      this.images.forEach((element) => {
        if (element.type == type) this.displayImages.push(element);
      });
    }
  }

  async openImageViewer(images, index) {
    const modal = await this.modalCtrl.create({
      component: ImageViewerComponent,
      componentProps: {
        images: images,
        index: index,
      },
    });
    return await modal.present();
  }
}
