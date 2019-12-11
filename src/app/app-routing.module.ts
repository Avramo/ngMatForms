import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageTodosComponent } from './comps/pages/page-todos/page-todos.component';
import { PagePostsComponent } from './comps/pages/page-posts/page-posts.component';


const routes: Routes = [
  {path:'todos' , component:PageTodosComponent},
  {path:'posts' , component:PagePostsComponent},

  {path:'' , redirectTo:'todos', pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
