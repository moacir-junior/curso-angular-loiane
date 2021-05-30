import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'data-binding';
  valor: number = 5;
  exibir: boolean = true;

  incrementar(): void {
    this.valor++;
  }

  deletar(): void {
    this.exibir = false;
  }
}