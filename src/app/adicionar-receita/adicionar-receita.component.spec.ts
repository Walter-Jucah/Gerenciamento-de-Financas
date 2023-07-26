import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarReceitaComponent } from './adicionar-receita.component';

describe('AdicionarReceitaComponent', () => {
  let component: AdicionarReceitaComponent;
  let fixture: ComponentFixture<AdicionarReceitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarReceitaComponent]
    });
    fixture = TestBed.createComponent(AdicionarReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
