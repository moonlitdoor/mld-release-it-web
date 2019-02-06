import {Component} from "@angular/core";
import {ENVIRONMENT} from "../../environments/environment";
import {Analytics} from "../analytics/analytics";
import {AboutDialogComponent} from "../about/about-dialog.component";
import {MatDialog} from "@angular/material";

@Component({
    selector: 'header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {

    showTabs: Boolean = ENVIRONMENT.showTabs;

    constructor(private dialog: MatDialog,) {
    }

    openAboutDialog(): void {
        Analytics.eventOpenAbout();
        AboutDialogComponent.open(this.dialog);
    }
}