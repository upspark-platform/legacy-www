import {AfterViewInit, animate, Component, OnInit, style, transition, trigger} from "@angular/core";
import {Command} from "../shared/runner/command";
import {LandingDemo} from "./landing-demo";

const commands:Command[] = require('./lib/commands');
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
        ])
    ]
})
export class LandingComponent implements AfterViewInit {

    public demo:LandingDemo = new LandingDemo();
    public running:boolean = false;
    public platform:string = platform;

    initRunner() {
        this.demo.init();
    }

    ngAfterViewInit() {
        this.running = true;
    }

}