import { Component, OnInit } from '@angular/core';
import { SvcUsersService } from 'src/app/services/svc-users.service';

@Component({
  selector: 'app-users-counter',
  templateUrl: './users-counter.component.html',
  styleUrls: ['./users-counter.component.css']
})
export class UsersCounterComponent implements OnInit {

  count:number = 0;

  constructor(public usersSVC:SvcUsersService) {
    console.log('UsersCounterComponent constructor');

    this.usersSVC.data.subscribe(users =>{
      console.log('UsersCounterComponent subscribed to users data!!');
      this.count = users.length;
      
    })
   }

  ngOnInit() {
  }

}
