import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: Array<any> = [];

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getLists().subscribe(data => {
      this.brews = data as Array<Object>;
      console.log(this.brews);
    });
  }
}
