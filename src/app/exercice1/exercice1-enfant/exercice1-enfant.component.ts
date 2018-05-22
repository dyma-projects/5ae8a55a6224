import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() public compteur: number;
  @Output() public result = new EventEmitter;


  constructor() { }

  increment() {
    this.compteur ++;
    this.result.emit({
      value: this.compteur
    });
  }

  decrement() {
    this.compteur --;
    this.result.emit({
      value: this.compteur
    });
  }

  ngOnInit() {
  }

}
