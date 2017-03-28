import {AfterViewInit, animate, Component, OnInit, style, transition, trigger} from "@angular/core";
import {LandingDemo} from "./landing-demo";

const platform:string = require('raw-loader!./lib/platform');

@Component({
    selector: 'up-landing',
    templateUrl: './landing.component.html',
    animations: [
        trigger('slide', [
            transition('void => *', [
                style({opacity: 0}),
                animate(2000, style({opacity: '1'})),
            ])
        ]),
        trigger('expand', [
            transition('void => *', [
                style({width: 0}),
                animate(500, style({width: '*'})),
            ])
        ])
    ]
})
export class LandingComponent implements AfterViewInit {

    public demo:LandingDemo = new LandingDemo();
    public running:boolean = false;
    public platform:string = platform;

    initRunner() {
        this.demo.init(
            this.platform,
            platform => this.platform = platform
        );
    }

    ngAfterViewInit() {
        this.running = true;
    }

}