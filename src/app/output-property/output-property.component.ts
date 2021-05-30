import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;
  @Output() mudouValor: EventEmitter<any> = new EventEmitter();
  @ViewChild('input') input!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  incrementar() {
    console.log(this.input.nativeElement.value);
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementar() {
    console.log(this.input.nativeElement.value);
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }
}
