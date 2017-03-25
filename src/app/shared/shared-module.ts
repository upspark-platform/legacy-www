import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {RunnerComponent} from "./runner/runner.component";
import {CodeComponent} from "./code/code.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        RunnerComponent,
        CodeComponent
    ],
    exports: [
        HeaderComponent,
        RunnerComponent,
        CodeComponent
    ],
    providers: [
    ]
})
export class SharedModule {}