import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    TimePickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    routes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
