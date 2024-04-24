import { AngularMaterialExampleDialogComponent } from '../angular-material-example-dialog/angular-material-example-dialog.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-angular-material-example',
  templateUrl: './angular-material-example.component.html',
  styleUrl: './angular-material-example.component.scss',
})
export class AngularMaterialExampleComponent {
  public constructor(private readonly dialog: MatDialog) {}
  protected name!: string;

  protected openDialog(): void {
    const dialogRef = this.dialog.open(AngularMaterialExampleDialogComponent, {
      data: { name: this.name },
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('Button clicked & dialog has been opened');
      this.name = result;
    });
  }
}
