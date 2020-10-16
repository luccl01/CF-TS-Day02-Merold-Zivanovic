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
var person = /** @class */ (function () {
    function person(firstName, lastName, age, jobTitle) {
        this.firstName = "";
        this.lastName = "";
        this.age = Number("");
        this.jobTitle = "";
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    person.prototype.name = function () {
        return "my name is " + this.firstName + " " + this.lastName + ", I am " + this.age + " years old and i am a " + this.jobTitle;
    };
    person.prototype.servus = function () {
        return "Hi there " + this.name();
    };
    return person;
}());
var fullName = new person("Lucas", "Merold", 23, "Bachelor");
document.write(fullName.servus());
console.log(fullName.servus());
var information = /** @class */ (function (_super) {
    __extends(information, _super);
    function information(firstName, lastName, age, jobTitle, jobLocation, salary) {
        var _this = _super.call(this, firstName, lastName, age, jobTitle) || this;
        _this.jobLocation = jobLocation;
        _this.salary = salary;
        return _this;
    }
    information.prototype.fullInfo = function () {
        return _super.prototype.servus.call(this) + ". I work in " + this.jobLocation + " and earn a shitton of " + this.salary + " dollares.";
    };
    return information;
}(person));
var addition = new information("Pablo", "Escobar", 69, "in exporting-business", "Medellin", 30000000000);
document.write("<br>");
document.write(addition.fullInfo());
