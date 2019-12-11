import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../comps/models/user';
import { GenericSVCService } from './generic-svc.service';

@Injectable({
  providedIn: 'root'
})
export class SvcUsersService extends GenericSVCService<User> {

  constructor(__http:HttpClient) { 
    super(__http, "users")
  }

  getFullNameById(id:number):string{
    try {
      return this.dataSubject.value.find(u => u.id == id).name
    } catch (error) {
      console.error('getFullNameById', id);
    }
  }

  getUserNameById(id:number):string{
    return this.dataSubject.value.find(u => u.id == id).username
  }
}