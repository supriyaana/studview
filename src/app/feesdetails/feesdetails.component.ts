import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feesdetails',
  templateUrl: './feesdetails.component.html',
  styleUrls: ['./feesdetails.component.css']
})
export class FeesdetailsComponent implements OnInit {

   fees=[
     {name:"Supriya",paidfees:"10000",remainfees:"5000"}
   ];    


  constructor() { }

  ngOnInit() {
  }

}
