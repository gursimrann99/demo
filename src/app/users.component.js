"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var user_1 = require("./user");
var UsersComponent = (function () {
    function UsersComponent() {
        this.users = [
            new user_1.User(1, 'Windstorm', 'BDC'),
            new user_1.User(2, 'Bombasto', 'BDC'),
            new user_1.User(3, 'Magneta', 'BDC'),
            new user_1.User(4, 'Tornado', 'BDC'),
        ];
        /*users=[
          {id:"1",
           name: "Santosh",
           location:"BDC"
            },
            {id:"2",
             name: "Sumit",
             location:"BDC"
              },
              {id:"3",
               name: "Gursimran",
               location:"BDC"
                },
                {id:"4",
                 name: "Prassana",
                 location:"BDC"
                  },
        ]*/
    }
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'users',
        template: "<div >\n                <table *ngIf=\"users.length>0\">\n                 <tr>\n                   <th>ID</th>\n                   <th>Name</th>\n                   <th>Location</th>\n                 </tr>\n                 <tr *ngFor=\"let user of users\">\n                   <td>{{user.id}}</td>\n                   <td>{{user.name}}</td>\n                   <td>{{user.location}}</td>\n\n                 </tr>\n                 <tr>\n                </table>\n            </div>\n              ",
    })
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map