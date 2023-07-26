import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarReceitaComponent } from './atualizar-receita.component';

describe('AtualizarReceitaComponent', () => {
  let component: AtualizarReceitaComponent;
  let fixture: ComponentFixture<AtualizarReceitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizarReceitaComponent]
    });
    fixture = TestBed.createComponent(AtualizarReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
