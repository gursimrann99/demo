"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.color_h2 = 'blue';
        this.color_h3 = 'red';
        this.prop = 'property defined in component';
        this.info = 'this is the latest Angular version(Angular2)';
        this.showVal = true;
    }
    AppComponent.prototype.toggle = function () {
        this.showVal = !this.showVal;
        console.log("Value changed new value is" + this.showVal);
    };
    AppComponent.prototype.newName = function (value) {
        console.log(value);
    };
    AppComponent.prototype.getValue = function () {
        return "orange";
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map