import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexerComponent } from 'src/app/components/indexer/indexer.component';

const routes: Routes = [
  {path: '', component: IndexerComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexerRoutingModule { }
