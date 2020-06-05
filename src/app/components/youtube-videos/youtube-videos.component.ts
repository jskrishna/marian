import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-youtube-videos",
  templateUrl: "./youtube-videos.component.html",
  styleUrls: ["./youtube-videos.component.scss"],
})
export class YoutubeVideosComponent implements OnInit {
  // videos = [
  //   "https://www.youtube.com/embed/xrqD7oXjbXI",
  //   "https://www.youtube.com/embed/xrqD7oXjbXI",
  //   "https://www.youtube.com/embed/xrqD7oXjbXI",
  //   "https://www.youtube.com/embed/xrqD7oXjbXI",
  // ];

  constructor() {}

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 3,
    loop: true,
    spaceBetween: 20,
    breakpoints: {
      // when window width is <= 480px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is <= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  };

  ngOnInit() {}

  //Move to Next slide
  slideNext(slideView) {
    // slideView.isEnd().then(res=>{
    //   console.log("res", res);
    //   if(res == false){
    slideView.slideNext(500).then((res) => {
      console.log("a", res);
    });
    //   }
    // });
  }

  //Move to previous slide
  slidePrev(slideView) {
    // slideView.isBeggining().then(res=>{
    //   if(res == false){
    slideView.slidePrev(500).then((res) => {
      console.log("b", res);
    });
    //   }
    // })
  }
}
