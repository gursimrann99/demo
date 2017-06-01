import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',

})
export class AppComponent
{ name = 'Angular';
color_h2='blue';
color_h3='red';
prop='property defined in component';
info='this is the latest Angular version(Angular2)';
showVal=true;
toggle(){
  this.showVal=!this.showVal;
  console.log("Value changed new value is"+this.showVal);
}
newName(value:string){
  console.log(value);
}
getValue(): string{
  return "orange";
}


}
