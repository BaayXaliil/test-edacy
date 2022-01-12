import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateMyPlatformSubDomainGQL } from 'src/generated/graphql';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.css']
})
export class CustomizationComponent implements OnInit {
  favicon;
  logo;
  platform;
  newdomain;
  files = [];
  constructor(
    private upadateMyPlatformSubdomainGQL: UpdateMyPlatformSubDomainGQL,
    private homeService: HomeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('platform')) {
      this.platform = JSON.parse(localStorage.getItem('platform'))
    } else {
      localStorage.setItem('prevPage', "/home/customization")
      this.router.navigate(['/auth/login-domain'])
    }
  }
  onChangeDomain(e) {
    console.log(e.target.value)
    this.newdomain = e.target.value;
  }
  updateSubdomain() {
    let subdomainInput = { oldDomain: this.platform.subdomain, newDomain: this.newdomain }
    this.upadateMyPlatformSubdomainGQL.mutate({ "updatePlatformSubDomainInput": subdomainInput }).subscribe(result => {
      if (result.errors) {
        console.log(result.errors)
      } else {
        this.platform.subdomain = this.newdomain;
        localStorage.setItem('platform', JSON.stringify(this.platform))
        console.log(result.data.updateMyPlatformSubDomain)
      }
    })
  }


  saveFiles() {
    let formData = new FormData();
    let i;
    for (i = 0; i < this.files.length; i++) {
      let file = this.files[i];
      let name = "favicon";
      if (i == 1) name = "logo"
      formData.append(name, file);
    }
    if (i == this.files.length) {
      this.homeService.saveFiles("dioptrie", formData).subscribe(data => {
        console.log(data);
        
      })
    }
  }

  onFileChangeFav(e) {
    if (e.target.files.length == 0) return;
    this.files[0] = e.target.files[0]
    this.createImage(e.target.files[0], "favicon");
  }
  onFileChangeLogo(e) {
    if (e.target.files.length == 0) return;
    this.files[1] = e.target.files[0]
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
