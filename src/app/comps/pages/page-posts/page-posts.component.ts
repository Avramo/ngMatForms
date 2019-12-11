import { Component, OnInit } from '@angular/core';
import { SvcPostsService } from 'src/app/services/svc-posts.service';
import { SvcUsersService } from 'src/app/services/svc-users.service';

@Component({
  selector: 'app-page-posts',
  templateUrl: './page-posts.component.html',
  styleUrls: ['./page-posts.component.css']
})
export class PagePostsComponent implements OnInit {
  
  usersArrived:boolean = false
  constructor(public postsSVC:SvcPostsService, public usersSVC:SvcUsersService) {
    this.usersSVC.data.subscribe(users => {
      if (users && users.length > 0) {
        this.usersArrived = true
      }
    })
  }

  ngOnInit() {
  }

}