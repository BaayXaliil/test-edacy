import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TemplateModule } from '../shared/components/template/template.module';
import { HomeRoutingModule } from './home-routine.module';
import { OverviewComponent } from './overview/overview.component';
import { ManageComponent } from './manage/manage.component';
import { CustomizationComponent } from './customization/customization.component';
import { HttpClientModule } from '@angular/common/http';
import { ColorSketchModule } from 'ngx-color/sketch';
import { ColorChromeModule } from 'ngx-color/chrome'; // <color-chrome></color-chrome>



@NgModule({
  declarations: [HomeComponent, OverviewComponent, ManageComponent, CustomizationComponent],
  imports: [
    CommonModule,
    TemplateModule,
    HomeRoutingModule,
    HttpClientModule,
    ColorSketchModule,
    ColorChromeModule
  ]
})
export class HomeModule { }
