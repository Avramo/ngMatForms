import { Component, OnInit } from '@angular/core';
import { SvcTodosService } from 'src/app/services/svc-todos.service';

@Component({
  selector: 'app-page-todos',
  templateUrl: './page-todos.component.html',
  styleUrls: ['./page-todos.component.css']
})
export class PageTodosComponent implements OnInit {

  constructor(public todosSVC:SvcTodosService) { }

  ngOnInit() {
  }

  searchTitle:string;
  searchUsrId:number;
}
