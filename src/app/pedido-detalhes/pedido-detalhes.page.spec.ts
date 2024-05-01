import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidoDetalhesPage } from './pedido-detalhes.page';

describe('PedidoDetalhesPage', () => {
  let component: PedidoDetalhesPage;
  let fixture: ComponentFixture<PedidoDetalhesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoDetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
