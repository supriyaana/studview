import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admissiondetail',
  templateUrl: './admissiondetail.component.html',
  styleUrls: ['./admissiondetail.component.css']
})
export class AdmissiondetailComponent implements OnInit {
   admission = [
      {name:"Supriya",email:"supriya@gmail.com",mobile:9786456321,address:"Parbhani",coursetype:"Frontend",sub:"Angular2"}
    ];

  constructor() { }

  ngOnInit() {
  }

}
