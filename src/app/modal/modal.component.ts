import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-modal',
  imports: [CommonModule,FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit{

  public data: any[] = [];

  constructor(public service : UserService){}

  ngOnInit(): void {
    this.service.getdata().subscribe((res) => {
      this.data = res;
    })
  }

  enableEdit(): void {
    this.service.editMode = true;
  }

  cancelEdit(): void {
    this.service.editMode = false;
    this.service.showdialog = false;
  }

}
