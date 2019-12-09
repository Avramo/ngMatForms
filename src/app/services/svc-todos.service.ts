import { Injectable } from '@angular/core';
import { Todo } from '../comps/models/todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SvcTodosService {

  constructor(public http:HttpClient) {
    this.http.get<Todo[]>(this.allTodosAPI)
    .subscribe(data => {
      this.allTodos = data;
    })
  }
  
  allTodosAPI:string = 'https://jsonplaceholder.typicode.com/todos/';
  allTodos:Todo[] = [];

}
