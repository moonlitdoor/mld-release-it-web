import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {AboutService} from './about.service';


@Component({
    templateUrl: 'about-dialog.component.html'
})
export class AboutDialogComponent {

    version: Promise<string>;
    date: Promise<number>;

    static open(dialog: MatDialog): MatDialogRef<AboutDialogComponent> {
        return dialog.open(AboutDialogComponent, {
            disableClose: false,
            width: '400px'
        });
    }

    constructor(private aboutService: AboutService) {
        this.version = this.aboutService.getVersion();
        this.date = this.aboutService.getDate();
    }

}
