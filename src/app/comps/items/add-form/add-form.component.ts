import { Component, OnInit, Input } from '@angular/core';
import { SvcUsersService } from 'src/app/services/svc-users.service';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../../models/user';
import { Post } from '../../models/post';
import { SvcPostsService } from 'src/app/services/svc-posts.service';
import { equal } from 'assert';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  constructor(public usersSVC:SvcUsersService, public postsSVC:SvcPostsService) { }
  ngOnInit() {
  }
  
  selectedformType:string = 'user';

  newUserForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
  })

  newPostForm = new FormGroup({
    userId: new FormControl(''),
    id: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl(''),
  })

  submitNewItem(fg:FormGroup){
    if (fg == this.newUserForm) {
      let newUser:User = fg.value;
      this.usersSVC.addNewItem(newUser)
      console.log('submitNewItem newUser = ', newUser);
    }
    if (fg == this.newPostForm) {
      let newPost:Post = fg.value;
      this.postsSVC.addNewItem(newPost)
      console.log('submitNewItem newPost = ', newPost);
    }
  }

}
