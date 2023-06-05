import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewLangDictionaryComponent } from './components/new-lang-dictionary/new-lang-dictionary.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./modules/login/login-routing.module' ).then(m => m.LoginRoutingModule) },
  {path: "populateDictionary", component : NewLangDictionaryComponent},
  { path: 'dashboard' , loadChildren: () => import('./modules/dashboard/dashboard-routing.module' ).then(m => m.DashboardRoutingModule)},
  { path: 'animator' , loadChildren: () => import('./modules/animator/animator-routing.module' ).then(m => m.AnimatorRoutingModule)},
  { path: 'indexer', loadChildren: () => import('./modules/indexer/indexer-routing.module' ).then(m => m.IndexerRoutingModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
