import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
    templateUrl: 'login.dialog.component.html'
})
export class LoginDialogComponent {

    static open(dialog: MatDialog): MatDialogRef<LoginDialogComponent> {
        return dialog.open(LoginDialogComponent, {
            disableClose: true,
            autoFocus: true
        });
    }

    constructor(private dialogRef: MatDialogRef<LoginDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    }

    save() {
        this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }

}
