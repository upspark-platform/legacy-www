import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ThemeComponent} from "./theme.component";
import {ThemeFillDirective} from "./theme.directive";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ThemeComponent,
        ThemeFillDirective
    ],
    exports: [
        ThemeComponent,
        ThemeFillDirective,
    ]
})
export class ThemeModule {

}