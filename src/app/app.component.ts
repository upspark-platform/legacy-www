import {Component, ViewEncapsulation} from '@angular/core';

import { MetaService } from 'ng2-meta';

import { Angulartics2GoogleAnalytics } from 'angulartics2';

@Component({
    selector: 'up-app',
    templateUrl: `./app.component.html`,
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    constructor(private metaService: MetaService, private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {}
}