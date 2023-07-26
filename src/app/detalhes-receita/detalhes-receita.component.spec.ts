import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesReceitaComponent } from './detalhes-receita.component';

describe('DetalhesReceitaComponent', () => {
  let component: DetalhesReceitaComponent;
  let fixture: ComponentFixture<DetalhesReceitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesReceitaComponent]
    });
    fixture = TestBed.createComponent(DetalhesReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
