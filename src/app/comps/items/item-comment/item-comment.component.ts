import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-item-comment',
  templateUrl: './item-comment.component.html',
  styleUrls: ['./item-comment.component.css']
})
export class ItemCommentComponent implements OnInit {

  constructor() { }

  @Input() comment:Comment;

  ngOnInit() {
  }
  my(clas){
    console.log(clas);
  }
}
