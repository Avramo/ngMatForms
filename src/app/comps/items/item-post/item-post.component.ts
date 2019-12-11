import { Component, OnInit, Input } from '@angular/core';
import { SvcPostsService } from 'src/app/services/svc-posts.service';
import { Post } from '../../models/post';
import { SvcUsersService } from 'src/app/services/svc-users.service';

@Component({
  selector: 'app-item-post',
  templateUrl: './item-post.component.html',
  styleUrls: ['./item-post.component.css']
})
export class ItemPostComponent implements OnInit {

  constructor(public postsSVC:SvcPostsService, public usersSVC:SvcUsersService) { }

  @Input() post:Post;

  ngOnInit() {
  }

}
