// Inheritance in OOPS Typescript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personss = /** @class */ (function () {
    function Personss(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    Personss.prototype.introduce = function () {
        return "My name is ".concat(this.name, " and I am ").concat(this.age, " years old and hobbies are ").concat(this.hobbies.join(","));
    };
    return Personss;
}());
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(name, age, hobbies, schoolName) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.schoolName = schoolName;
        return _this;
    }
    Students.prototype.introduce = function () {
        return "My name is ".concat(this.name, " and I am ").concat(this.age, " years old and hobbies are ").concat(this.hobbies.join(","), " and my school name is ").concat(this.schoolName);
    };
    return Students;
}(Personss));
var person1 = new Personss("anas", 20, ["read", "code"]);
var person2 = new Personss("ali", 22, ["gaming", "gardening"]);
var person3 = new Students("anas", 20, ["sport", "programming"], "TISS");
console.log(person1.introduce());
console.log(person2.introduce());
console.log(person3.introduce());
