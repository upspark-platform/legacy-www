import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {LayoutComponent} from "./layout.component";
import {LayoutGrid} from "./layout-grid/layout-grid.component";
import {LayoutBlock} from "./layout-block/layout-block.component";


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LayoutComponent,
        LayoutGrid,
        LayoutBlock
    ],
    exports: [
        LayoutComponent,
        LayoutGrid,
        LayoutBlock
    ]
})
export class LayoutModule {}