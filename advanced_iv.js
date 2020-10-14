var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function guess() {
    var sel = document.getElementById('input1');
    sel.addEventListener("change", function () {
        var type = document.getElementById("input1").value;
        if (type == "car") {
            document.getElementById("input2").innerHTML = "\n            <option id=\"cm1\"value=\"audi\">Audi</option>\n            <option value=\"ford\">Ford</option>\n            <option value=\"mercedes\">Mercedes</option>";
            document.getElementById("disc").innerHTML = info.intro();
        }
        ;
        if (type == "truck") {
            document.getElementById("input2").innerHTML = "\n            <option value=\"man\">Man</option>\n            <option value=\"daimler\">Daimler</option>\n            <option value=\"volvo\">Volvo</option>";
        }
        ;
        if (type == "bike") {
            document.getElementById("input2").innerHTML = "\n            <option value=\"honda\">Honda</option>\n            <option value=\"harley\">Harley Davidson</option>\n            <option value=\"kawasaki\">Kawasaki</option>";
        }
        ;
    });
}
;
guess();
var box = [];
var Vehicle = /** @class */ (function () {
    function Vehicle(model, year, ps, price) {
        this.model = model;
        this.year = year;
        this.ps = ps;
        this.price = price;
        box.push(this);
    }
    Vehicle.prototype.intro = function () {
        var b = this.year;
        var c = this.ps;
        var d = this.price;
        return this.model + " " + this.year + " " + this.ps + ". Old Price " + this.price + ". New Price " + Math.floor(d * c / b);
    };
    return Vehicle;
}());
var nr = document.getElementById("input3").value;
console.log(nr);
var info = new Vehicle("Ford", nr, 100, 10000);
document.getElementById("disc").innerHTML = info.intro();
console.log(info.intro());
console.log(box);
var Planes = /** @class */ (function (_super) {
    __extends(Planes, _super);
    function Planes(model, year, ps, price, fueltype, seats) {
        var _this = _super.call(this, model, year, ps, price) || this;
        _this.fueltype = fueltype;
        _this.seats = seats;
        return _this;
    }
    Planes.prototype.intro = function () {
        return _super.prototype.intro.call(this) + " " + this.fueltype + " " + this.seats;
    };
    return Planes;
}(Vehicle));
var res1 = new Planes("Airbus", 1970, 2000, 1000000, "Kerosene", 100);
console.log(res1.intro());
var Ships = /** @class */ (function (_super) {
    __extends(Ships, _super);
    function Ships(model, year, ps, price, length) {
        var _this = _super.call(this, model, year, ps, price) || this;
        _this.length = length;
        return _this;
    }
    Ships.prototype.intro = function () {
        return _super.prototype.intro.call(this) + " " + this.length;
    };
    return Ships;
}(Vehicle));
var res2 = new Ships("Dufour", 2014, 1000, 200000, 600);
console.log(res2.intro());
