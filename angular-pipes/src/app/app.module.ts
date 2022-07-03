import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyOwnPipePipe } from './pipes/my-own-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyOwnPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
