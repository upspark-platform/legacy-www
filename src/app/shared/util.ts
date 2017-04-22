const REG_EXP_EMAIL: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const SCROLL_CONTAINER = "html, body";

export class Util {

    static isValidEmail(email:string) {
        return REG_EXP_EMAIL.test(email);
    }

    static getSlice(text:string, needle:string, first:boolean = true) {

        const fragmentIndex:number = text.indexOf(needle);

        if(fragmentIndex === -1) {
            return first ? text : "";
        }

        return first ? text.slice(0, fragmentIndex) : text.slice(fragmentIndex+1);

    }

    static scroll(offset:number, speed:string|number = "slow", easing:string = "swing"):Promise<number> {
        return new Promise<any>((resolve:(result:any) => any) => {
            $(SCROLL_CONTAINER)
                .stop()
                .animate({ scrollTop: offset }, speed, easing, () => resolve(offset));
        });

    }

    static scrollToTop(speed:string|number = "slow", easing:string = "swing"):Promise<number> {
        return Util.scroll(0, speed, easing);
    }

    static scrollTo(element:any, speed:string|number = "slow", easing:string = "swing", scroll:number = -1, heightReference:any = null):Promise<number> {
        element = typeof element === 'string' ? $(element) : element;

        if(heightReference !== null) {
            heightReference = typeof heightReference === 'string' ? $(heightReference) : heightReference;
        }

        let offset = element.offset().top;

        const height = heightReference ? heightReference.height() : element.height();
        const browser = $(window).height();

        if (height < browser && scroll <= -1) {
            offset -= (browser / 2) - (height / 2);
        } else if(scroll > -1) {
            offset -= scroll;
        }

        return Util.scroll(offset, speed, easing);
    }
}