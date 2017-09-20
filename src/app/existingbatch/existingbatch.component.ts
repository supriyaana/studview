import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existingbatch',
  templateUrl: './existingbatch.component.html',
  styleUrls: ['./existingbatch.component.css']
})
export class ExistingbatchComponent implements OnInit {
   batches =[
    {name:"Supriya Kurundkar",existingbatch:"D"},
    {name:"Sarita Jadhav",existingbatch:"C"} 
  ];

  constructor() { }

  ngOnInit() {
  }

}
