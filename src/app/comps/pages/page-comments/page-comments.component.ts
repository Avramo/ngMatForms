import { Component, OnInit } from '@angular/core';
import { SvcCommentsService } from 'src/app/services/svc-comments.service';

@Component({
  selector: 'app-page-comments',
  templateUrl: './page-comments.component.html',
  styleUrls: ['./page-comments.component.css']
})
export class PageCommentsComponent implements OnInit {
   
  

  constructor(public commentsSVC:SvcCommentsService) { }

  ngOnInit() {
  }

}
