import {Component} from '@angular/core';
import {MatIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import {Analytics} from "./analytics/analytics";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private _: Analytics) {
        iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/images/github-white.svg'));
    }

}
