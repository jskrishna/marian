import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-youtube-videos",
  templateUrl: "./youtube-videos.component.html",
  styleUrls: ["./youtube-videos.component.scss"],
})
export class YoutubeVideosComponent implements OnInit {
  videos = [
    "../assets/videos/3.mp4",
    "../assets/videos/2.mp4",
    "../assets/videos/1.mp4",
  ];
  constructor() {}

  ngOnInit() {}
}
