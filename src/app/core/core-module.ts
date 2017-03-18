import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {LayoutModule} from "./layout/layout.module";
import {ThemeComponent} from "./theme/theme.component";
import {ThemeModule} from "./theme/theme.module";

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        ThemeModule
    ],
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent,
        ThemeModule,
        LayoutModule
    ],
    providers: [
    ]
})
export class CoreModule {}