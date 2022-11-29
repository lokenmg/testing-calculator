import { Component, OnInit } from '@angular/core';
import { addition } from "../addition/addition"
import { substraction } from '../substraction/substraction';
import { division } from '../division/division';
import { sqr } from '../sqr/sqr';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }

  result = 0;
  operator1 = 0;
  operator2 = 0;

  ngOnInit() {
  }

  addition() {
    let myresult = 0;
    myresult = addition(this.operator1, this.operator2);
    this.result = myresult;
  }

  substraction() {
    let myresult = 0;
    myresult = substraction(this.operator1, this.operator2);
    this.result = myresult;
  }

  division() {
    let myresult =0;
    myresult = division(this.operator1, this.operator2);
    this.result = myresult;
  }

   sqr() {
     let myresult =0;
     myresult = sqr(this.operator1);
     this.result = myresult;

  }

}
