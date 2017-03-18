import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {LayoutModule} from "./layout/layout.module";
import {ThemeComponent} from "./theme/theme.component";

@NgModule({
    imports: [
        CommonModule,
        LayoutModule
    ],
    declarations: [
        HeaderComponent,
        ThemeComponent
    ],
    exports: [
        HeaderComponent,
        ThemeComponent,
        LayoutModule
    ],
    providers: [
    ]
})
export class CoreModule {}