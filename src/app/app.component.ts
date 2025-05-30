import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabelComponent } from "./components/tabel/tabel.component";
import { AddModalComponent } from "./components/add-modal/add-modal.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TabelComponent, AddModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tema2-Tabel';
}
