export = index;
declare function index(secret: any, options: any): any;
declare namespace index {
    function JSONCookie(str: any): any;
    function JSONCookies(obj: any): any;
    function signedCookie(str: any, secret: any): any;
    function signedCookies(obj: any, secret: any): any;
}
