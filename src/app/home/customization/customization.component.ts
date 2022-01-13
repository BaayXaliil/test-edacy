import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColorEvent } from 'ngx-color';
import { UpdateMyPlatformColorsGQL, UpdateMyPlatformSubDomainGQL } from 'src/generated/graphql';
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
  primaryColor: string = "#36c2a4";
  secondaryColor: string = "#ffd447";
  constructor(
    private upadateMyPlatformSubdomainGQL: UpdateMyPlatformSubDomainGQL,
    private homeService: HomeService,
    private router: Router,
    private updatePlatformColorGQL: UpdateMyPlatformColorsGQL
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('platform')) {
      this.platform = JSON.parse(localStorage.getItem('platform'))
    } else {
      localStorage.setItem('prevPage', "/home/customization")
      this.router.navigate(['/auth/login-domain'])
    }
  }

  handleChangeColorPrimary($event: ColorEvent) {
    console.log($event.color);
    this.primaryColor = $event.color.hex;
  }
  handleChangeColorSecondary($event: ColorEvent) {
    this.secondaryColor = $event.color.hex;
  }
  onChangeDomain(e) {
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

  updateTheme() {
    let platformThemeInput = { primaryColor: this.primaryColor, secondaryColor: this.secondaryColor }
    this.updatePlatformColorGQL.mutate({ "subdomain": this.platform.subdomain, "platformThemeInput": platformThemeInput })
      .subscribe((result) => {
        console.log(result.data.updateMyPlatformColors);
        this.platform.theme.primaryColor = this.primaryColor
        this.platform.theme.secondaryColor = this.secondaryColor
        localStorage.setItem('platform', JSON.stringify(this.platform))
    }, (error) => console.log(error))
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
      this.homeService.saveFiles(this.platform.subdomain, formData).subscribe(data => {
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
