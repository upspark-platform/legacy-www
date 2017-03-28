import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {RunnerComponent} from "./runner/runner.component";
import {CodeComponent} from "./code/code.component";
import {FooterComponent} from "./footer/footer.component";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent,
        RunnerComponent,
        FooterComponent,
        CodeComponent
    ],
    exports: [
        HeaderComponent,
        RunnerComponent,
        FooterComponent,
        CodeComponent
    ],
    providers: [
    ]
})
export class SharedModule {}