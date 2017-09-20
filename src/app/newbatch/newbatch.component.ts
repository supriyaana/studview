import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newbatch',
  templateUrl: './newbatch.component.html',
  styleUrls: ['./newbatch.component.css']
})
export class NewbatchComponent implements OnInit {
  newbatches =[
    {name:"Aniket", batchname:"B"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
