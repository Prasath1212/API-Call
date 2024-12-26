import { HttpClient, withFetch } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url = 'http://localhost:3000/result';

  public showdialog = false; 

  public selectedData: any = null;

  public editMode = false;

  constructor( private http : HttpClient) { }

  getdata(): Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }

  selectData(data: any): void {
    this.selectedData = data;
  }

}
