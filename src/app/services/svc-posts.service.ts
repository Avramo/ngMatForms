import { Injectable } from '@angular/core';
import { GenericSVCService } from './generic-svc.service';
import { Post } from '../comps/models/post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SvcPostsService extends GenericSVCService<Post> {

  constructor(__http:HttpClient) { 
    super(__http, "posts")
  }
}
