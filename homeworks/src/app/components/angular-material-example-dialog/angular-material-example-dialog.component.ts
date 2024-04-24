import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export type DialogData = {
  name: string;
};

@Component({
  selector: 'app-angular-material-example-dialog',
  templateUrl: './angular-material-example-dialog.component.html',
  styleUrl: './angular-material-example-dialog.component.scss',
})
export class AngularMaterialExampleDialogComponent {
  public constructor(
    private readonly dialogRef: MatDialogRef<AngularMaterialExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) protected data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
