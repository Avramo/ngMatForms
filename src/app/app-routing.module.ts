import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageTodosComponent } from './comps/pages/page-todos/page-todos.component';
import { PagePostsComponent } from './comps/pages/page-posts/page-posts.component';
import { PageCommentsComponent } from './comps/pages/page-comments/page-comments.component';
import { PageUsersComponent } from './comps/pages/page-users/page-users.component';
import { AddFormComponent } from './comps/items/add-form/add-form.component';


const routes: Routes = [
  {path:'todos' , component:PageTodosComponent, data: { pageName: ' Todos'} },
  {path:'posts' , component:PagePostsComponent,
    data: { pageName: ' Posts'} 
  }, 
  {path:'comments' , component:PageCommentsComponent,
    data: { pageName: ' Comments'} 
  }, 
  {path:'users' , component:PageUsersComponent,
    data: { pageName: ' Users'} 
  }, 
  {path:'addUserForm' , component:AddFormComponent,
    data: { pageName: ' Form'} 
  }, 
  {path:'' , redirectTo:'todos', pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
