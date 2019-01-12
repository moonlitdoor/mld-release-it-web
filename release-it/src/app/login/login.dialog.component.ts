import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
    templateUrl: './login.dialog.component.html'
})
export class LoginDialogComponent {

    constructor(private dialogRef: MatDialogRef<LoginDialogComponent>, @Inject(MAT_DIALOG_DATA) data) { }

    save() {
        this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }

    static open(dialog: MatDialog): MatDialogRef<LoginDialogComponent> {
        var dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        return dialog.open(LoginDialogComponent, dialogConfig);
    }

}