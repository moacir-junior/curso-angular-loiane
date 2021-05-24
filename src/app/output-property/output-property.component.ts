import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;
  @Output() mudouValor: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  incrementar() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementar() {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }
}
