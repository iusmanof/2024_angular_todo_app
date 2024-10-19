import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/routing/app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './modules/todo/todo.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';
import { StartPageComponent } from './modules/todo/page/start-page/start-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "**",
        redirectTo: ""
      }
    ]),
    AppRoutingModule,
    TodoModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
