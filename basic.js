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
var Person = /** @class */ (function () {
    function Person(name, age, titel) {
        this.name = "";
        this.age = "";
        this.titel = "";
        this.name = name;
        this.age = age;
        this.titel = titel;
    }
    Person.prototype.intro = function () {
        return "Hello there, My name is " + this.name + " and I am " + this.age + " years old, and I am a " + this.titel + ".";
    };
    return Person;
}());
var dis = new Person("Ivan", "33", "BA");
console.log(dis.intro());
var Info = /** @class */ (function (_super) {
    __extends(Info, _super);
    function Info(name, age, titel, location, salary) {
        var _this = _super.call(this, name, age, titel) || this;
        _this.salary = salary;
        _this.location = location;
        return _this;
    }
    Info.prototype.intro = function () {
        return _super.prototype.intro.call(this) + " and I get " + this.salary + " every month, and I work in " + this.location;
    };
    return Info;
}(Person));
var dis1 = new Info("Ivan", "33", "BA", "3.000,-", "Vienna");
console.log(dis1.intro());
