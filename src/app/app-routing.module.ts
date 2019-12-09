import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './comps/pages/menu/menu.component';
import { PageTodosComponent } from './comps/pages/page-todos/page-todos.component';


const routes: Routes = [
  {path:'menu' , component:MenuComponent},
  {path:'todos' , component:PageTodosComponent},
  {path:'' , redirectTo:'menu', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
