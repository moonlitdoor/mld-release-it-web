import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from "@angular/material";
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
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
import {CopyrightComponent} from "./footer/copyright/copyright.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from './login/login.component';
import {LoginDialogComponent} from './login/login.dialog.component';
import {SurveyComponent} from './survey/survey.component';
import {Analytics} from "./analytics/analytics";
import {TrunkbasedComponent} from "./trunkbased/trunkbased.component";
import {GitflowComponent} from "./gitflow/gitflow.component";
import {MonthPipe} from "./pipes/month.pipe";

@NgModule({
    declarations: [
        AboutDialogComponent,
        AppComponent,
        GitflowComponent,
        CopyrightComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        LoginComponent,
        LoginDialogComponent,
        MonthPipe,
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
        MatCardModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
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
