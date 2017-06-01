import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'users',
  template: `<div >
                <table *ngIf="users.length>0">
                 <tr>
                   <th>ID</th>
                   <th>Name</th>
                   <th>Location</th>
                 </tr>
                 <tr *ngFor="let user of users">
                   <td>{{user.id}}</td>
                   <td>{{user.name}}</td>
                   <td>{{user.location}}</td>

                 </tr>
                 <tr>
                </table>
            </div>
              `,
})
export class UsersComponent
{



  users = [
  new User(1, 'Windstorm','BDC'),
  new User(2, 'Bombasto','BDC'),
  new User(3, 'Magneta','BDC'),
  new User(4, 'Tornado','BDC'),
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
