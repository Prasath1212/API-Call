import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'http';

  public data: any[] = [];

  constructor( public service : UserService){}

  ngOnInit(): void {
      this.service.getdata().subscribe((res) => {
        this.data = res;
      })
  }


  // show(row : any){

  //   const newname = prompt("Edit name: ", row.name);
  //   if(newname !== null) {
  //     row.name = newname;
  //   }

  //   const newlang = prompt("Edit Language: ",row.language);
  //   if(newlang !== null) {
  //     row.language = newlang;
  //   }

  //   const newid = prompt("Edit ID: ", row.id);
  //   if(newid !== null){
  //     row.id = newid;
  //   }

  //   const newversion = prompt("Edit Version: ", row.version);
  //   if(newversion !== null) {
  //     row.version = newversion;
  //   }
  //   alert("Name : " + row.name + "\n" + "Language : " + row.language + "\n" + "ID : " + row.id + "\n" + "Version : " + row.version);
  // }
}
