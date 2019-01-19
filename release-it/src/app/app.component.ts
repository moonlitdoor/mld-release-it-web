import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LoginDialogComponent} from './login/login.dialog.component';
import {AboutDialogComponent} from './about/about-dialog.component';
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    constructor(private dialog: MatDialog, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/images/github-white.svg'));
    }

    openAccountDialog(): void {
        LoginDialogComponent.open(this.dialog);
    }

    openAboutDialog(): void {
        AboutDialogComponent.open(this.dialog);
    }
}
