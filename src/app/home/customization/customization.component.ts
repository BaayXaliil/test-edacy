import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.css']
})
export class CustomizationComponent implements OnInit {
  favicon;
  logo;
  constructor() { }

  ngOnInit(): void {
  }

  onFileChangeFav(e) {
    if (e.target.files.length == 0) return;
    this.createImage(e.target.files[0], "favicon");
  }
  onFileChangeLogo(e) {
    if (e.target.files.length == 0) return;
    this.createImage(e.target.files[0], "logo");
  }
  createImage(file, img) {
    var image = new Image();
    var reader = new FileReader();

    reader.onload = (e) => {
      if (e.target?.result) {
        if (img == "favicon")
          this.favicon = e.target.result;
        if (img == "logo")
          this.logo = e.target.result;
      }
    };
    reader.readAsDataURL(file);
  }
}
