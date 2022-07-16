import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectDirective } from './select.directive';

@NgModule({
  declarations: [
    AppComponent,
    SelectDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SelectDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
