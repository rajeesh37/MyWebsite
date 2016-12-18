import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  public doughnutChartLabels:string[] = ['MySql', 'Oracle', 'Other Relation Dbs'];
  public doughnutChartData:number[] = [550, 450, 100];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }



  constructor() { }

  ngOnInit() {
  }

}
