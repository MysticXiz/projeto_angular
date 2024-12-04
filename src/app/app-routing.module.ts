import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { DetalhesLivrosComponent } from './pages/detalhes-livros/detalhes-livros.component';
import { LivrosSalvosPagComponent } from './pages/livros-salvos-pag/livros-salvos-pag.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'livros/:id', component: DetalhesLivrosComponent},
  { path: 'salvos', component: LivrosSalvosPagComponent},
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
