import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmDialogData } from '../reusable-dialog/confirm-dialog-data.ts';
import { DialogComponent } from '../reusable-dialog/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})

export class reUsableDialogService {
  constructor(private dialog: MatDialog) { }

  confirmDialog(data: ConfirmDialogData): Observable<boolean> {
    return this.dialog
      .open(DialogComponent, {
        data,
        width: '400px',
        disableClose: true,
      })
      .afterClosed();
  }
}
