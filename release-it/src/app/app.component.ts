import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
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

    openAboutDialog(): void {
        AboutDialogComponent.open(this.dialog);
    }
}
