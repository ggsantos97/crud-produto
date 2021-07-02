import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-edita-produto',
  templateUrl: './edita-produto.component.html',
  styleUrls: ['./edita-produto.component.scss']
})
export class EditaProdutoComponent implements OnInit {
  public formProdutoEdicao: FormGroup; 
  constructor(private fb: FormBuilder,
        public dialogRef: MatDialogRef<EditaProdutoComponent>,
        @Inject(MAT_DIALOG_DATA) public produto: Produto,
        private service: ProdutoService,
        private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.criaFormEdicao();
  }

  criaFormEdicao(){
    this.formProdutoEdicao = this.fb.group({
      id: [this.produto.id, Validators.required],
      nome: [this.produto.nome, Validators.required],
      valor: [this.produto.valor, Validators.required]
    });
  }

  salvaAlteracoes(){
      this.produto = this.formProdutoEdicao.value;
      this.service.editarProduto(this.produto).subscribe(data => {
        this.dialogRef.close(data);
      }, error => {
        this.snackBar.open(`Erro ao tentar atualizar o Produto ${this.produto.nome}`,`fechar`,
        {
          duration: 5000,
          direction: 'ltr'
        } )
      })
  }

  limparForm(){
    this.formProdutoEdicao.reset()
  }

}
