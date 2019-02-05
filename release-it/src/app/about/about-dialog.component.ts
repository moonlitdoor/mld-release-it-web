import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {AboutService} from './about.service';
import {ENVIRONMENT} from '../../environments/environment';
import {Observable} from "rxjs";

@Component({
    templateUrl: 'about-dialog.component.html'
})
export class AboutDialogComponent {

    version: Observable<string>;
    date: Observable<number>;
    env: string;

    static open(dialog: MatDialog): MatDialogRef<AboutDialogComponent> {
        return dialog.open(AboutDialogComponent, {
            disableClose: false,
            width: '500px'
        });
    }

    constructor(private aboutService: AboutService) {
        this.version = this.aboutService.getVersion();
        this.date = this.aboutService.getDate();
        this.env = ENVIRONMENT.env
    }

}
