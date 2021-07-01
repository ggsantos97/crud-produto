import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.scss']
})
export class ListagemProdutoComponent implements OnInit {

  constructor(private service: ProdutoService) { }
  produtos: Produto[] = [];
  colunasTabela: string[] = ['id', 'nome', 'valor'];
  ngOnInit(): void {
    this.buscarProdutos();
  }

  buscarProdutos(){
    this.service.buscarTodosProdutos().subscribe(data => {
      this.produtos = data;
    }, erro => {
      alert(erro);
    })
  }

}
