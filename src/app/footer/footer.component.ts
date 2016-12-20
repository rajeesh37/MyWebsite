import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


 private  title : string;
 
 
private displayName():void{
      
  var  hour : number  = (new Date).getHours();
       
      if(hour >=0 &&  hour <=12){
            this.title = 'Thanks for visiting in this Morning..!';
      }else if(hour >=12 &&  hour <= 15){
            this.title = 'Thanks for visiting in this Afternoon..!';
      }else {
            this.title = 'Thanks for visiting in this Evening..!';
      }
}

      constructor(){
            setInterval(()=>this.displayName(),1000);
      }
      





  ngOnInit() {
  }

}
