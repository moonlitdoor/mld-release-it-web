import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { Router, ActivatedRoute } from '@angular/router';
import { Survey } from './survey'

@Component({
    template: '<iframe style="position:relative;width:100%;margin: 60px auto 0px auto;" [src]="surveys[id].url" width="640" [height]="surveys[id].height" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>'
})
export class SurveyComponent implements OnInit, OnDestroy {

    private defaultSurvey: number = 0
    private subscription: any;

    public id: number = this.defaultSurvey;
    public surveys: Survey[] = [
        new Survey(this.sanitizer.bypassSecurityTrustResourceUrl("https://docs.google.com/forms/d/e/1FAIpQLSftN8tFvP18hOzc-dHcyXPRgfqJ8hXIHCVdN_OmiChXq2euPQ/viewform?embedded=true"), 1834)
    ]

    constructor(public sanitizer: DomSanitizer, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            var num = Number(params['id'] || this.defaultSurvey);
            if (isNaN(num) || num >= this.surveys.length || num == this.defaultSurvey) {
                this.router.navigate(["survey"])
            } else {
                this.id = num;
            }
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
