import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimatorTableComponent } from 'src/app/components/animator-table/animator-table.component';

const routes: Routes = [
  { path: '', component: AnimatorTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimatorRoutingModule { }
