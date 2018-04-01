import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact.component';
import { HelpComponent } from './help/help.component';
import { JsonObjectComponent } from './json-object/json-object.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HelpComponent,
    JsonObjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
