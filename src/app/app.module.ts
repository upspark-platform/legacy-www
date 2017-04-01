import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {RouterModule} from "@angular/router";
import {LandingModule} from "./landing/landing.module";
import {DownloadsModule} from "./downloads/downloads.module";
import {SharedModule} from "./shared/shared-module";
import { MetaModule, MetaConfig } from 'ng2-meta';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';
import {FeedbackModule} from "./feedback/feedback.module";

@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        LandingModule,
        FeedbackModule,
        DownloadsModule,
        RouterModule.forRoot([]),
        MetaModule.forRoot(),
        Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}