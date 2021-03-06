import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './playground/components/counter/counter.component';
import { AuthComponent } from './playground/components/auth/auth.component';
import {PostsComponent} from './playground/components/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    AuthComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
