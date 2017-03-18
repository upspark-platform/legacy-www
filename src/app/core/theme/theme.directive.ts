import {Directive, ElementRef, HostBinding, Input, OnChanges, SimpleChanges} from "@angular/core";

@Directive({
    selector: '[theme]'
})
export class ThemeFillDirective implements OnChanges {

    @Input() theme: string = 'primary';

    @HostBinding('class.fill-primary') primary: boolean = false;
    @HostBinding('class.fill-secondary') secondary: boolean = false;
    @HostBinding('class.fill-tertiary') tertiary: boolean = false;
    @HostBinding('class.fill-accent') accent: boolean = false;

    constructor() {
    }

    apply() {
        const fill = this.theme ? this.theme.toLowerCase() : 'primary';

        this.primary = 'primary' === fill;
        this.secondary = 'secondary' === fill;
        this.tertiary = 'tertiary' === fill;
        this.accent = 'accent' === fill;
    }

    ngOnChanges(changes: SimpleChanges) {
        this.apply();
    }

}