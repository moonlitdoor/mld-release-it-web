import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {NgModule} from '@angular/core';

import {AboutDialogComponent} from './about/about-dialog.component';
import {AboutService} from './about/about.service';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from "./home/home.component";
import {LoginDialogComponent} from './login/login.dialog.component';
import {SurveyComponent} from './survey/survey.component';


@NgModule({
    declarations: [
        AboutDialogComponent,
        AppComponent,
        HomeComponent,
        LoginDialogComponent,
        SurveyComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FlexLayoutModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        MatToolbarModule,
        MatTooltipModule,
        AppRoutingModule
    ],
    providers: [
        AboutService
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
