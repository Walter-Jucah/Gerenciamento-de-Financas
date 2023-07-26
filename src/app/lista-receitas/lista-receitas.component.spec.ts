import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReceitasComponent } from './lista-receitas.component';

describe('ListaReceitasComponent', () => {
  let component: ListaReceitasComponent;
  let fixture: ComponentFixture<ListaReceitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaReceitasComponent]
    });
    fixture = TestBed.createComponent(ListaReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
