import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadComponent } from './read/read.component';

import { HttpClientModule } from '@angular/common/http';
import { MarvellousService } from './marvellous.service';
import { BatchComponent } from './batch/batch.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    BatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [MarvellousService],
  bootstrap: [AppComponent]
})
export class AppModule { }
