import { Component, OnInit } from '@angular/core';
import { SvcUsersService } from 'src/app/services/svc-users.service';

@Component({
  selector: 'app-page-users',
  templateUrl: './page-users.component.html',
  styleUrls: ['./page-users.component.css']
})
export class PageUsersComponent implements OnInit {

  constructor(public usersSVC:SvcUsersService) { }

  ngOnInit() {
    
  }

}
