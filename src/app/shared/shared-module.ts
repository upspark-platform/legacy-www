import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {RunnerComponent} from "./runner/runner.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        RunnerComponent
    ],
    exports: [
        HeaderComponent,
        RunnerComponent
    ],
    providers: [
    ]
})
export class SharedModule {}