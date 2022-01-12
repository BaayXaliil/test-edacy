import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-program',
  templateUrl: './new-program.component.html',
  styleUrls: ['./new-program.component.css']
})
export class NewProgramComponent implements OnInit {

  image;
  imageName;
  imagesize;
  imageFormat;
  video;
  videoName;
  videoSize
  videoFormat;
  videos;
  images;
  constructor() { }

  ngOnInit(): void {
  }

  onFileChangeImage(e) {
    if (e.target.files.length !== 0)
      this.images = e.target.files
    console.log(this.images[0])
    this.imageName = this.images[0].name.split('.')[0];
    let size = Number(this.images[0].size) / 1000
    this.imagesize = size.toString().split(".")[0]
    this.imageFormat = this.images[0].type.split("/")[1]
    this.createImage(e.target.files[0], "favicon");
    console.log(this.image)
  }
  onFileChangeVideo(e) {
    if (e.target.files.length !== 0)
      this.videos = e.target.files
    console.log(this.videos[0])
    this.createImage(this.videos[0], "video");
  }
  createImage(file, img) {
    var reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        if (img == "favicon")
          this.image = e.target.result;
        if (img == "video")
          this.video = e.target.result;
      }
    };
    reader.readAsDataURL(file);
  }

  dragover(event) {
    event.preventDefault();
    event.currentTarget.classList.add('droped');
  }
  dragleave(event) {
    // Clean up
    event.currentTarget.classList.remove('droped');
  }

  onDrop(e) {
    e.preventDefault();
    this.videos = e.dataTransfer.files;
    console.log(this.videos);
    e.currentTarget.classList.remove('droped');
  }
  onDropImg(e) {
    e.preventDefault();
    this.images = e.dataTransfer.files;
    console.log(this.images);
    e.currentTarget.classList.remove('droped');
  }
}
