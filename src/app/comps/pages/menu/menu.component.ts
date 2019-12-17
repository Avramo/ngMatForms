import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Route, Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { GenericSVCService } from 'src/app/services/generic-svc.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  pageTitle:string;

  constructor(public router:Router) {
    

   }


  ngOnInit() {
    this.router.events.subscribe(data =>{
      console.log('this.router.events = ', data);
      if (data instanceof RoutesRecognized) {
        this.pageTitle = data.state.root.firstChild.data.pageName;
      }
      console.log(' this.pageTitle = ',  this.pageTitle);

    })
  }


}