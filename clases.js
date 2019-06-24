"use strict";
var Calc = /** @class */ (function () {
    function Calc() {
        this.num1 = 0;
        this.num2 = 0;
    }
    Calc.prototype.regresaSuma = function (num1, num2) {
        return num1 + num2;
    };
    return Calc;
}());
var calculadora1 = new Calc();
alert(calculadora1.regresaSuma(5, 6));
