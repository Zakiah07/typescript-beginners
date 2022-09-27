"use strict";
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
exports.__esModule = true;
var message = "Welcome Back";
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = "Codevolution";
var isBeginner = true;
var total = 0;
var name = "Zakiah";
var sentence = "My name is ".concat(name, "\nI am a beginner in TypeScript;");
console.log(sentence);
var n = null;
var u = undefined;
// let isNew: boolean = null;
// let myName: string = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ["Chris", 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
// let c: Color = Color.Green;
// console.log(c);
// let randomValue: unknown = 10;
// randomValue = true;
// randomValue = "Zakiah";
// let myVariable: any = 10;
// function hasName(obj: any): obj is { name: string } {
//   return !!obj && typeof obj === "object" && "name" in obj;
// }
// if (hasName(myVariable)) {
//   console.log(myVariable.name);
// }
// (myVariable as string).toUpperCase();
// let a;
// a = 10;
// a = true;
// let b = 20;
// let multiType: number | boolean;
// multiType = 20;
// multiType = true;
// function add(num1: number, num2: number = 10): number {
//   if (num2) return num1 + num2;
//   else return num1;
// }
// add(5, 10);
// add(5);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Zakiah');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
