import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TemplateModule } from '../shared/components/template/template.module';
import { HomeRoutingModule } from './home-routine.module';
import { OverviewComponent } from './overview/overview.component';
import { ManageComponent } from './manage/manage.component';
import { CustomizationComponent } from './customization/customization.component';



@NgModule({
  declarations: [HomeComponent, OverviewComponent, ManageComponent, CustomizationComponent],
  imports: [
    CommonModule,
    TemplateModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
