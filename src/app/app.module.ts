import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatHeaderComponent } from './Components/chat-header/chat-header.component';
import { ChatHomeComponent } from './Components/chat-home/chat-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatHeaderComponent,
    ChatHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
