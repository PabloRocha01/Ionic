import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Rotas filhas
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'contato',
    loadChildren: () => import ('./page/contato/contato.module').then (m => m.ContatoPageModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import ('./page/sobre/sobre.module').then (m => m.SobrePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'form/:id',
    loadChildren: () => import('./page/form/form.module').then( m => m.FormPageModule)
  },

  //Rotas simples
  /* {path 'inicio', component: iniciocomponente} */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
