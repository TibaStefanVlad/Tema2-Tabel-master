import { Injectable } from '@angular/core';
import { TableRow } from '../models/row';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  public rows = new BehaviorSubject<TableRow[]>([
    { id: 1, nume: 'Popescu', prenume: 'Ion', email: 'ion.popescu@email.com', varsta: 25, oras: 'Bucuresti' },
    { id: 2, nume: 'Ionescu', prenume: 'Maria', email: 'maria.ionescu@email.com', varsta: 30, oras: 'Cluj' },
    { id: 3, nume: 'Georgescu', prenume: 'Andrei', email: 'andrei.georgescu@email.com', varsta: 28, oras: 'Timisoara' },
    { id: 4, nume: 'Dumitru', prenume: 'Elena', email: 'elena.dumitru@email.com', varsta: 22, oras: 'Iasi' },
    { id: 5, nume: 'Stan', prenume: 'Vasile', email: 'vasile.stan@email.com', varsta: 35, oras: 'Constanta' },
    { id: 6, nume: 'Mihailescu', prenume: 'Radu', email: 'radu.mihailescu@email.com', varsta: 27, oras: 'Brasov' },
    { id: 7, nume: 'Petrescu', prenume: 'Ioana', email: 'ioana.petrescu@email.com', varsta: 31, oras: 'Sibiu' },
    { id: 8, nume: 'Enache', prenume: 'Marius', email: 'marius.enache@email.com', varsta: 24, oras: 'Oradea' },
    { id: 9, nume: 'Tudor', prenume: 'Anca', email: 'anca.tudor@email.com', varsta: 29, oras: 'Arad' },
    { id: 10, nume: 'Iliescu', prenume: 'Cristian', email: 'cristian.iliescu@email.com', varsta: 33, oras: 'Ploiesti' }
  ]);


  constructor() { }

  updateRows(newRows: TableRow[]): void {
    this.rows.next(newRows);
  }
}
