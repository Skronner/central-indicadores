import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CartaControleComponent } from './carta-controle/carta-controle.component';
import { ConectaComponent } from './conecta/conecta.component';

const routes: Routes = [
  { path: '', redirectTo: '/carta_controle', pathMatch: 'full' },
  { path: 'carta_controle', loadChildren: () => import('./carta-controle/carta-controle.module').then(m => m.CartaControleModule) },
  { path: 'conecta', component: ConectaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
