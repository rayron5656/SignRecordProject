import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTableComponent } from 'src/app/components/main-table/main-table.component';

const routes: Routes = [
  { path: '', component: MainTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
