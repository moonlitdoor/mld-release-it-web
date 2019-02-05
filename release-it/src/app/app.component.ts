import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AboutDialogComponent} from './about/about-dialog.component';
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import {Analytics} from "./analytics/analytics";
import {ENVIRONMENT} from "../environments/environment";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    showTabs: Boolean = ENVIRONMENT.showTabs;

    constructor(private dialog: MatDialog, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private _: Analytics) {
        iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/images/github-white.svg'));
    }

    openAboutDialog(): void {
        Analytics.eventOpenAbout();
        AboutDialogComponent.open(this.dialog);
    }
}
