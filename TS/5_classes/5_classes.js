var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[" + name + "]: version is " + this.version;
    };
    return Typescript;
}());
var t = new Typescript('111');
console.log(t.info('11'));
