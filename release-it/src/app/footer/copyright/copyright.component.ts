import {Component} from "@angular/core";

@Component({
    selector: 'copyright',
    templateUrl: 'copyright.component.html'
})
export class CopyrightComponent {

    private initial: number = 2019;
    value: string;

    constructor() {
        let date = new Date().getFullYear();
        if (date > this.initial) {
            this.value = `2018 - ${date}`
        } else {
            this.value = `${date}`
        }
    }
}