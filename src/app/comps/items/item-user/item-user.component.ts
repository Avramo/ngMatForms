import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-item-user',
  templateUrl: './item-user.component.html',
  styleUrls: ['./item-user.component.css']
})
export class ItemUserComponent implements OnInit {

  constructor() { }
  
  @Input() usr:User;

  ngOnInit() {
  }

}
