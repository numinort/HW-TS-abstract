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
var Car = /** @class */ (function () {
    function Car(name, countryBrand) {
        this.name = name;
        this.countryBrand = countryBrand;
    }
    return Car;
}());
var Mini = /** @class */ (function (_super) {
    __extends(Mini, _super);
    function Mini(modelName) {
        var _this = _super.call(this, 'Mini', 'Great Britain') || this;
        _this.modelName = modelName;
        return _this;
    }
    Mini.prototype.getInfo = function () {
        console.log(this.createInfo());
    };
    Mini.prototype.createInfo = function () {
        return " Brand Name: " + this.name + ", Country brand: " + this.countryBrand + ", Model name: " + this.modelName;
    };
    return Mini;
}(Car));
var RollsRoyce = /** @class */ (function (_super) {
    __extends(RollsRoyce, _super);
    function RollsRoyce(modelName) {
        var _this = _super.call(this, 'RollsRoyce', 'Great Britain') || this;
        _this.modelName = modelName;
        return _this;
    }
    RollsRoyce.prototype.createInfo = function () {
        return " Brand Name: " + this.name + ", Country brand: " + this.countryBrand + ", Model name: " + this.modelName;
    };
    RollsRoyce.prototype.getInfo = function () {
        console.log(this.createInfo());
    };
    return RollsRoyce;
}(Car));
var Bmw = /** @class */ (function (_super) {
    __extends(Bmw, _super);
    function Bmw(modelName) {
        var _this = _super.call(this, 'BMW', 'Germany') || this;
        _this.modelName = modelName;
        return _this;
    }
    Bmw.prototype.createInfo = function () {
        return " Brand Name: " + this.name + ", Country brand: " + this.countryBrand + ", Model name: " + this.modelName;
    };
    Bmw.prototype.getInfo = function () {
        console.log(this.createInfo());
    };
    return Bmw;
}(Car));
var x5 = new Bmw('x5');
var x7 = new Bmw('x7');
var cooper = new Mini('cooper');
var country = new Mini('country man');
var phantom = new RollsRoyce('Phantom V');
var shadow = new RollsRoyce('Silver Shadow');
x5.getInfo();
x7.getInfo();
cooper.getInfo();
country.getInfo();
phantom.getInfo();
shadow.getInfo();
