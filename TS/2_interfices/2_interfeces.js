var rect1 = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: 'ccc'
};
var rect3 = {};
var rect5 = {
    id: '1',
    size: {
        width: 12,
        height: 12
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
console.log(rect5.getArea());
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1 px',
    marginTop: '2 px'
};
