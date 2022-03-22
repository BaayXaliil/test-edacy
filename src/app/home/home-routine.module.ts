import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomizationComponent } from './customization/customization.component';
import { HomeComponent } from './home.component';
import { ManageComponent } from './manage/manage.component';
import { OverviewComponent } from './overview/overview.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'overview/:token', component: OverviewComponent },
  { path: 'manage', component: ManageComponent },
  { path: 'customization', component: CustomizationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
