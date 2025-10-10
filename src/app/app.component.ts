import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyPipe, DatePipe, NgFor, UpperCasePipe } from '@angular/common';
import { NgForOf } from "../../node_modules/@angular/common/common_module.d-NEF7UaHr";

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet,DatePipe],
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Movies';
  apellido="Civil";
  edad=35;
  peliculas = [
    {
        titulo: "Spider-man",
        lanzamiento: new Date(),
        precio: 600.00
    },
    {
      titulo:"Moana",
      lanzamiento: new Date(),
      precio: 100
    }
];
  duplicarNumero(valor:number):number
  {
    return valor*2;
  }
}
