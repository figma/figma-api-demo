import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FigmaModule } from '../components/figma.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FigmaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
