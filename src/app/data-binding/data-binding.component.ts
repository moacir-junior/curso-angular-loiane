import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'programacaoeminhagameplay.com.br';
  urlImagem: string = 'http://lorempixel.com/400/200/nature/';
  infoTexto: string = '';
  infoTextoSalva: string = '';
  isMouseOver: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  somar(a: number, b: number): number {
    return a + b;
  }

  acaoBotao() {
    alert('Botão clicado!');
  }

  onKeyup(event: KeyboardEvent) {
    this.infoTexto = (<HTMLInputElement>event.target).value;
  }

  salvarInfoTexto(info: string) {
    this.infoTextoSalva = info;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
}
