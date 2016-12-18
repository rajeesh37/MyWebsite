import { Component, OnInit } from '@angular/core';


let template = require('./framework.component.html');

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})
export class FrameworkComponent implements OnInit {

 // lineChart
/*  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [0,0, 50, 50, 50, 50]
  ];*/


public lineChartData:Array<any> = [
  { data : [90, 90, 50, 50,50],label : 'spring'},
  { data : [  50, 75, 85, 85 ,85],label : 'grails'},
  { data : [ 0, 0,90, 90,90],label : 'angular'},
  { data : [ 70, 70,0, 0],label : 'jsf'},
   { data : [ 65, 65,0, 0],label : 'ejb portlets'}
];




  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';
  public pieChartType:string = 'pie';
  public labels: Array<any>=['2013','2014','2015','2016','2017']
  // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];

  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  
  ngOnInit() {
  }

}
