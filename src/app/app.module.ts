import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MbGbPipe } from './pipes/mbgb-pipe';
import { ROrderByPipe } from './pipes/sort-pipe';
import { NgForOf } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    MbGbPipe,
    ROrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
