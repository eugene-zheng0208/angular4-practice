import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-object',
  templateUrl: './json-object.component.html',
  styleUrls: ['./json-object.component.css']
})
export class JsonObjectComponent implements OnInit {
  persons = [
    {name: "Varun", age: 28},
    {name: "Gurpreet", age: 22},
    {name: "Munish", age: 2}
  ];
  constructor() { }


  checkAge(age){
    alert(age);
  }

  ngOnInit() {
  }

}
