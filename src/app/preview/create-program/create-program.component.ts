import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateProgramGQL } from 'src/generated/graphql';
import { ProgramService } from '../service/program.service';

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
  lang: string = "en";
  user;
  defaultLanguage = "english"
  level: string = "Bigginer";
  type: string = "Fondation";
  title: string = "";
  description: string = "";


  constructor(
    private router: Router,
    private createProgramGQL: CreateProgramGQL,
    private programService: ProgramService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.user = JSON.parse(localStorage.getItem('currentUser'))
    }
  }

  changeTitle(e) {
    this.title = e.target.value;
    console.log(this.title);
    
  }
  changeDesc(e) {
    this.description = e.target.value;
    
  }
  changeLang(e) {
    this.lang = e.target.value;
    this.defaultLanguage = e.target.id;
  }
  changeLevel(e) {
    this.level = e.target.value;
  }
  changeType(e) {
    this.type = e.target.value;
    console.log(this.type)
  }

  addProgram() {
    let program = {
      category: this.user.id, source: "Learn", type: this.type, level: this.level,
      title: {[this.lang]: this.title},
      description: { [this.lang]: this.description},
      duration: 2222
    }
    console.log(program)
    // this.createProgramGQL.mutate({ "program": program }).subscribe((result) => {
    //   console.log(result.data.createProgram);
    // }, (error) => {
    //   console.log(error);
    // })
    console.log(this.videos)
    console.log(this.images)
    const formData = new FormData();
    formData.append('poster', this.images[0])
    formData.append('introVideo', this.videos[0])
    const fields = Object.keys(program);
    fields.map((field: string) => {
      formData.append(field, program[field]);
    });
    this.programService.saveProgram(formData).subscribe(result => {
      console.log(result);
      
    })
  }
  onFileChangeImage(e) {
    if (e.target.files.length !== 0)
      this.images = e.target.files
    console.log(this.images[0])
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
