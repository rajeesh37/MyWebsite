import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lat: number = 32.9069687;
  lng: number = -117.1684315;

  constructor() { }

  ngOnInit() {
  }

}
