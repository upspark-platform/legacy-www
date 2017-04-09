const REG_EXP_EMAIL: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export class Util {

    static isValidEmail(email:string) {
        return REG_EXP_EMAIL.test(email);
    }

    static scrollTopTop() {
        $("html, body").stop()
            .animate({ scrollTop: 0 }, "slow");
    }
}