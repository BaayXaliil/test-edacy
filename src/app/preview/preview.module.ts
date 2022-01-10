import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public/public.component';
import { OverviewComponent } from './overview/overview.component';
import { CreateProgramComponent } from './create-program/create-program.component';
import { TemplateModule } from '../shared/components/template/template.module';
import { PreviewRoutingModule } from './preview-routing.module';



@NgModule({
  declarations: [PublicComponent, OverviewComponent, CreateProgramComponent],
  imports: [
    CommonModule,
    TemplateModule,
    PreviewRoutingModule
  ]
})
export class PreviewModule { }
