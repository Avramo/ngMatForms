import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../comps/models/todo';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(allTodosArr:Todo[], titleSearch:string, usrIdSearch:number, ): Todo[] {
    console.log('FilterTodosPipe start allTodosArr=', allTodosArr);
    console.log('FilterTodosPipe start titleSearch=', titleSearch);
    console.log('FilterTodosPipe start usrIdSearch=', usrIdSearch);
    if ( !titleSearch && !usrIdSearch ) {
      console.log('FilterTodosPipe not filtered ');
      return allTodosArr;
    }

    if ( titleSearch && !usrIdSearch ) {
      let title_filteredArr = allTodosArr.filter(todo => {
        return todo.title.includes(titleSearch);
       })
       console.log('FilterTodosPipe TITLE SEARCH ');
       return title_filteredArr;
    }

    if ( usrIdSearch && !titleSearch ) {
      let user_filteredArr = allTodosArr.filter(todo => {
        return todo.userId == usrIdSearch;
       })
       console.log('FilterTodosPipe USER SEARCH ');
       return user_filteredArr;
    }

    else{
      let filteredArr = allTodosArr.filter(todo => {
       return todo.title.includes(titleSearch) && todo.userId == usrIdSearch
      })
      console.log('FilterTodosPipe end filteredArr=', filteredArr);
      return filteredArr;
    }
  }

}
