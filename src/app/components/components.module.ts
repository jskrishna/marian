import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { IntroComponent } from './intro/intro.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { YoutubeVideosComponent } from './youtube-videos/youtube-videos.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    YoutubeVideosComponent,
    PhotoGalleryComponent,
    IntroComponent,
    ImageSliderComponent,
    GoogleMapComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    YoutubeVideosComponent,
    PhotoGalleryComponent,
    IntroComponent,
    ImageSliderComponent,
    GoogleMapComponent,
    FooterComponent,
  ]
})
export class ComponentsModule { }
