import { StartPageComponent } from "../todo/page/start-page/start-page.component";
import { PageNotFoundComponent } from "../todo/page/page-not-found/page-not-found.component";
import { TodoPageComponent } from "../todo/page/todo-page/todo-page.component";

export const routes = [
  {
    path: '',
    component: StartPageComponent,
  },
  {
    path: 'todo-page', 
    component: TodoPageComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];