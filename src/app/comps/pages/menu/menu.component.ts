import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

}
