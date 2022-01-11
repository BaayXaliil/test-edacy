import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProgramComponent } from './create-program/create-program.component';
import { NewProgramComponent } from './new-program/new-program.component';
import { OverviewComponent } from './overview/overview.component';
import { PublicComponent } from './public/public.component';


const routes: Routes = [
  { path: '', redirectTo: 'public'},
  { path: 'public', component: PublicComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'create-program', component: CreateProgramComponent },
  { path: 'new-program', component: NewProgramComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviewRoutingModule { }
