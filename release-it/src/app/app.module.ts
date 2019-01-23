import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import {ENVIRONMENT} from '../environments/environment';

import {AboutDialogComponent} from './about/about-dialog.component';
import {AboutService} from './about/about.service';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from './login/login.component';
import {LoginDialogComponent} from './login/login.dialog.component';
import {SurveyComponent} from './survey/survey.component';
import {Analytics} from "./analytics/analytics";
import {TrunkbasedComponent} from "./trunkbased/trunkbased.component";
import {GitflowComponent} from "./gitflow/gitflow.component";

@NgModule({
    declarations: [
        AboutDialogComponent,
        AppComponent,
        GitflowComponent,
        HomeComponent,
        LoginComponent,
        LoginDialogComponent,
        SurveyComponent,
        TrunkbasedComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FlexLayoutModule,
        AngularFireModule.initializeApp(ENVIRONMENT.firebase.config),
        AngularFireAuthModule,
        AngularFirestoreModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule
    ],
    providers: [
        Analytics,
        AboutService,
        AngularFirestore
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        AboutDialogComponent,
        LoginDialogComponent
    ]
})
export class AppModule {
}
