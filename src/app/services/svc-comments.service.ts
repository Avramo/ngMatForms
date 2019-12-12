import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericSVCService } from './generic-svc.service';
import { Comment } from '../comps/models/comment';

@Injectable({
  providedIn: 'root'
})
export class SvcCommentsService extends GenericSVCService<Comment> {

  constructor(__http:HttpClient) { 
    super(__http, "comments")
  }
}
