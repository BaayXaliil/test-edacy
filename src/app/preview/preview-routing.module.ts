import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProgramComponent } from './create-program/create-program.component';
import { OverviewComponent } from './overview/overview.component';
import { PublicComponent } from './public/public.component';


const routes: Routes = [
  { path: '', redirectTo: 'public'},
  { path: 'public', component: PublicComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'create-program', component: CreateProgramComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviewRoutingModule { }
