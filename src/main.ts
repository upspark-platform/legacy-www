import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app/app.module';
import {enableProdMode} from '@angular/core';

if (process.env.ENV === 'production') {
    enableProdMode();
} else if(module['hot']) {
    module['hot'].accept();
}

//noinspection JSIgnoredPromiseFromCall
platformBrowserDynamic().bootstrapModule(AppModule);