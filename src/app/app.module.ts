import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MbGbPipe } from './pipes/mbgb-pipe';
import { ROrderByPipe } from './pipes/sort-pipe';
import { NgForOf } from '@angular/common';
import { MbgbSampleComponent } from './mbgb-sample/mbgb-sample.component';


@NgModule({
  declarations: [
    AppComponent,
    MbGbPipe,
    ROrderByPipe,
    MbgbSampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
