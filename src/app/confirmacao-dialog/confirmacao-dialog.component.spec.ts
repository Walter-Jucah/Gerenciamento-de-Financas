import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoDialogComponent } from './confirmacao-dialog.component';

describe('ConfirmacaoDialogComponent', () => {
  let component: ConfirmacaoDialogComponent;
  let fixture: ComponentFixture<ConfirmacaoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmacaoDialogComponent]
    });
    fixture = TestBed.createComponent(ConfirmacaoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
