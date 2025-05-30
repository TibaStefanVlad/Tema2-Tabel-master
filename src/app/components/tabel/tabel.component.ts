import { Component, inject } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';
import { TableDataService } from '../../services/table-data.service';
import { TableRow } from '../../models/row';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HighlightTextPipe } from "../../pipes/highlight.pipe";

@Component({
  selector: 'app-table',
  imports: [NzTableModule,
    NzButtonModule,
    NzIconModule, CommonModule, NzModalModule, ReactiveFormsModule, HighlightTextPipe],
  templateUrl: './tabel.component.html',
  styleUrl: './tabel.component.scss'
})
export class TabelComponent {
  dataService = inject(TableDataService);
  rows: TableRow[] = [];
  isVisible = false;
  isConfirmLoading = false;
  form: FormGroup = new FormGroup({});
  rowToEdit: number | null = null;

  ngOnInit() { 
    this.getRows();

    this.dataService.rows.subscribe(data => {
      this.rows = data;
      console.log('S-au schimbat datele:', this.rows);
    });
  }

  getRows() {
    this.rows = this.dataService.rows.getValue();
    console.log('Rows fetched:', this.rows);
  }

  editRow(row: TableRow) {
    this.rowToEdit = row.id;

    this.form = new FormGroup({
      nume: new FormControl(row.nume, Validators.required),
      prenume: new FormControl(row.prenume, Validators.required),
      varsta: new FormControl(row.varsta, [Validators.required, Validators.min(0), Validators.max(120)]),
      email: new FormControl(row.email, [Validators.required, Validators.email]),
      oras: new FormControl(row.oras, Validators.required)
    });

    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleOk(): void {
    if (this.form.invalid) {
      alert("Date incomplete sau invalide!");
      return;
    }

    const updatedRow: TableRow = {
      id: this.rowToEdit!,
      nume: this.form.value.nume,
      prenume: this.form.value.prenume,
      varsta: this.form.value.varsta,
      email: this.form.value.email,
      oras: this.form.value.oras
    };
    
    const currentRows = this.rows;
    const updatedRows = currentRows.map(row =>
      row.id === updatedRow.id ? { ...row, ...updatedRow } : row
    );

    this.dataService.updateRows(updatedRows);
    this.isVisible = false;
  }
}
