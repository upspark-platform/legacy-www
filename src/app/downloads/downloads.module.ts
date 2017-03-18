import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {DownloadsComponent} from "./downloads.component";
import {DownloadsRoutingModule} from "./downloads-routing.module";

@NgModule({
    imports: [
        CommonModule,
        DownloadsRoutingModule
    ],
    declarations: [
        DownloadsComponent
    ],
    providers: [
    ]
})
export class DownloadsModule {}