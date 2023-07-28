// confirmacao-dialog.component.ts

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmacao-dialog',
  templateUrl: './confirmacao-dialog.component.html',
  styleUrls: ['./confirmacao-dialog.component.css'],
})
export class ConfirmacaoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmacaoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public mensagem: string // Injete a mensagem recebida do diálogo
  ) {}

  // Método para fechar o diálogo com a resposta de confirmação
  confirmar(): void {
    this.dialogRef.close(true);
  }

  // Método para fechar o diálogo sem resposta de confirmação
  cancelar(): void {
    this.dialogRef.close(false);
  }
}
