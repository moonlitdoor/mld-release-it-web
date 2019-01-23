import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {ENVIRONMENT} from "../../environments/environment";

declare let gtag: Function;

@Injectable({
    providedIn: 'root'
})
export class Analytics {

    static eventOpenAbout() {
        Analytics.sendEvent("open", "about", "openAbout")
    }

    static eventLogin() {
        Analytics.sendEvent("engagement", "login")
    }

    static eventLogout() {
        Analytics.sendEvent("engagement", "logout")
    }

    constructor(router: Router) {
        try {
            const gtagScript = document.createElement('script');
            gtagScript.async = true;
            gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=" + ENVIRONMENT.googleAnalyticsId;
            document.head.appendChild(gtagScript);

            const gtagConfigureScript = document.createElement('script');
            gtagConfigureScript.innerHTML = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config','` + ENVIRONMENT.googleAnalyticsId + `',{'optimize_id':'` + ENVIRONMENT.googleOptimizeId + `'});`;
            document.head.appendChild(gtagConfigureScript);
        } catch (ex) {
            console.error(ex);
        }

        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                gtag('config', ENVIRONMENT.googleAnalyticsId, {page_path: event.urlAfterRedirects});
            }
        });
    }

    private static sendEvent(eventCategory: string, eventAction: string, eventLabel: string = null, eventValue: number = null) {
        let metadata = {event_category: eventCategory};
        if (eventLabel) metadata["event_label"] = eventLabel;
        if (eventValue) metadata["value"] = eventValue;
        gtag('event', eventAction, metadata);
    }
}
