import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material-module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemTodoComponent } from './comps/items/item-todo/item-todo.component';
import { PageTodosComponent } from './comps/pages/page-todos/page-todos.component';
import { MenuComponent } from './comps/pages/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { FilterTodosPipe } from './pipes/filter-todos.pipe';
import { ItemPostComponent } from './comps/items/item-post/item-post.component';
import { PagePostsComponent } from './comps/pages/page-posts/page-posts.component';
import { PageCommentsComponent } from './comps/pages/page-comments/page-comments.component';
import { ItemCommentComponent } from './comps/items/item-comment/item-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemTodoComponent,
    PageTodosComponent,
    MenuComponent,
    FilterTodosPipe,
    ItemPostComponent,
    PagePostsComponent,
    PageCommentsComponent,
    ItemCommentComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
