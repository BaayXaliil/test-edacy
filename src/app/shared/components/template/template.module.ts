import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { HeaderComponent } from '../header/header.component';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';



@NgModule({
  declarations: [TemplateComponent, HeaderComponent, SidemenuComponent],
  imports: [
    CommonModule
  ],
  exports: [TemplateComponent]
})
export class TemplateModule { }
