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
import {DocumentationModule} from "./documentation/documentation.module";
import {TutorialModule} from "./tutorial/tutorial.module";
import {RecipesModule} from "./recipes/recipes.module";

@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        LandingModule,
        FeedbackModule,
        DownloadsModule,
        DocumentationModule,
        TutorialModule,
        RecipesModule,
        RouterModule.forRoot([{
            path: '**',
            redirectTo: "/"
        }]),
        MetaModule.forRoot(),
        Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}