import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
 userName: string = "zainab";
 isDisabledBtn :boolean = true ;

 alertUserName(){
  alert(this.userName);
 }
}
