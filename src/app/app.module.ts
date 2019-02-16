import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ROrderByPipe } from './pipes/sort-pipe';
import { NgForOf } from '@angular/common';
import { MbgbSampleComponent } from './mbgb-sample/mbgb-sample.component';
import { MbGbPipe } from './pipes/mbgb-pipe';
import { RawDataComponent } from './raw-data/raw-data.component';


@NgModule({
  declarations: [
    AppComponent,
    ROrderByPipe,
    MbgbSampleComponent,
    MbGbPipe,
    RawDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
