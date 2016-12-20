import { Component, OnInit } from '@angular/core';


let template = require('./framework.component.html');

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})
export class FrameworkComponent implements OnInit {



//-----------------------------------------------Coding for Line chart---------------------------------------------------------
 // lineChart

/*

public lineChartData:Array<any> = [
  { data : [90, 90, 50, 50,50],label : 'spring'},
  { data : [  50, 75, 85, 85 ,85],label : 'grails'},
  { data : [ 0, 0,90, 90,90],label : 'angular'},
  { data : [ 70, 70,0, 0],label : 'jsf'},
   { data : [ 65, 65,0, 0],label : 'ejb portlets'}
];*/




 /* public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';
  public pieChartType:string = 'pie';
  public labels: Array<any>=['2013','2014','2015','2016','2017']
  // Pie
  public pieChartLabels:string[] = ['Grails', 'Spring', 'Angular', 'Hibernate'];
  public pieChartData:number[] = [350, 350, 250,50];

  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }*/

 /* public chartClicked(e:any):void {
    console.log(e);
  }*/

  /*public chartHovered(e:any):void {
    console.log(e);
  }
*/
//---------------------------Line chart ending-----------------------------------------------------------------------------


public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };


  //public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartLabels:string[] = ['Grails', 'Spring', 'Angular', 'Hibernate', 'JSF','Jquery', 'Oralce Apex'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

 public barChartData:any[] = [
  // {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
   //{data: [85, 80, 75, 80,60, 75,40 ,0], label: 'Proficiency in Frameworks'}
    {data: [85, 80, 75, 80,60, 75,40 ,0], label: 'Proficiency in Frameworks'}
  ];

// events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

//--------------------------------------------Pie Chart Implementation starting-------------------------
 // Pie
  public pieChartLabels:string[] = ['Windows', 'Linux'];
  public pieChartData:number[] = [700, 300];
  public pieChartType:string = 'pie';

//--------------------------------------------pie chart ending------------------------------------------
  
  ngOnInit() {
  }

}
