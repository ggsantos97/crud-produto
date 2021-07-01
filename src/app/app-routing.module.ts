import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListagemProdutoComponent } from './Produto/listagem-produto/listagem-produto.component';

const routes: Routes = [
  {
    path:'',
    component: AppComponent
  },
  {
    path:'produtos'
    componente: ListagemProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
