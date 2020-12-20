import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './playground/components/counter/counter.component';
import { AuthComponent } from './playground/components/auth/auth.component';
import {PostsComponent} from './playground/components/posts/posts.component';
import { RoutingComponent } from './playground/components/routing/routing.component';
import { NavbarComponent } from './playground/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    AuthComponent,
    PostsComponent,
    RoutingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
