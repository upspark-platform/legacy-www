import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {DocumentationComponent} from "./documentation.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'documentation',
                component: DocumentationComponent,
                data: {
                    meta: {
                        title: 'Upspark - Documentation',
                    }
                }
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class DocumentationRoutingModule { }