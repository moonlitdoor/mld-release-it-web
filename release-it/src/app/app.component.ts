import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { LoginDialogComponent } from "./login/login.dialog.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private dialog: MatDialog) { }

  openAccountDialog(): void {
    LoginDialogComponent.open(this.dialog)
  }
}
