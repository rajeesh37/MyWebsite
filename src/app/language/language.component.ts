import { Component, OnInit } from '@angular/core';


let template = require('./language.component.html');


@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {




public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };


  //public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartLabels:string[] = ['Java', 'Groovy', 'Javascript', 'Typescript', 'c','c++', 'php'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;


  public barChartData:any[] = [
  // {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [80, 85, 75, 75, 40, 40, 25], label: 'Proficiency in Programming Languages'}
  ];


// events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  
public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

  constructor() { }

  ngOnInit() {
  }

}
