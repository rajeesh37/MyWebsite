import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 private  title : string;
 
 
private displayName():void{
      
  var  hour : number  = (new Date).getHours();
       
      if(hour >=0 &&  hour <=12){
            this.title = 'Good Morning....!';
      }else if(hour >=12 &&  hour <= 15){
            this.title = 'Good Afternoon....!';
      }else {
            this.title = 'Good Evening....!';
      }
}

      constructor(){
            setInterval(()=>this.displayName(),1000);
      }
      



  ngOnInit() {
  }

}
