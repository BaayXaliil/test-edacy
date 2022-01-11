import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-program',
  templateUrl: './create-program.component.html',
  styleUrls: ['./create-program.component.css']
})
export class CreateProgramComponent implements OnInit {

  favicon;
  logo;
  videos;
  images;
  constructor() { }

  ngOnInit(): void {
  }

  onFileChangeImage(e) {
    if (e.target.files.length !== 0)
      this.images = e.target.files
    console.log(this.images)
    this.createImage(e.target.files[0], "favicon");
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
          this.favicon = e.target.result;
        if (img == "video")
          this.logo = e.target.result;
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
