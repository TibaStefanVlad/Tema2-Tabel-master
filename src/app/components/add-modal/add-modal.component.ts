import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { TableDataService } from '../../services/table-data.service';

@Component({
  selector: 'app-add-modal',
  imports: [NzModalModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-modal.component.html',
  styleUrl: './add-modal.component.scss'
})
export class AddModalComponent {
  dataService = inject(TableDataService);

  isVisible = false;
  isConfirmLoading = false;
  form: FormGroup = new FormGroup({});

  openWindow() {
    this.form = new FormGroup({
      nume: new FormControl('', Validators.required),
      prenume: new FormControl('', Validators.required),
      varsta: new FormControl('', [Validators.required, Validators.min(0), Validators.max(120)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      oras: new FormControl('', Validators.required)
    });

    console.log('Form initialized:', this.form);

    this.isVisible = true;
  }

  handleOk(): void {
    if (this.form.invalid) {
      alert("Date incomplete sau invalide!");
      return;
    }

    const currentRows = this.dataService.rows.getValue();
    this.dataService.rows.next([...currentRows, this.form.value]);
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
