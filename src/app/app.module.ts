import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemProdutoComponent } from './Produto/listagem-produto/listagem-produto.component';
import { EditaProdutoComponent } from './Produto/edita-produto/edita-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemProdutoComponent,
    EditaProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
