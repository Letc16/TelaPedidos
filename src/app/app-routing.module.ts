import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pedido-detalhes', pathMatch: 'full' },
  { path: 'pedido-detalhes', loadChildren: () => import('./pedido-detalhes/pedido-detalhes.module').then( m => m.PedidoDetalhesPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
