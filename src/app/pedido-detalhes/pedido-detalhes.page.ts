import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedido-detalhes',
  templateUrl: './pedido-detalhes.page.html',
  styleUrls: ['./pedido-detalhes.page.scss'],
})
export class PedidoDetalhesPage {
  numeroPedido: number;
  itens: { nome: string, preco: number }[];
  formaPagamento: string;

  constructor(private route: ActivatedRoute) {
    // Exemplo de dados do pedido (você pode substituir por seus próprios dados)
    this.numeroPedido = 1;
    this.itens = [
      { nome: 'Combo 1', preco: 25.00 },
      { nome: 'Combo 2', preco: 35.00 },
      { nome: 'Combo 4', preco: 55.00 }
    ];
    this.formaPagamento = 'Cartão de Crédito';
  }

  calcularTotal(): number {
    return this.itens.reduce((total, item) => total + item.preco, 0);
  }
}
