import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { Angular2GoogleChartModule } from '../angular2-google-chart.module';

import { AppComponent }   from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports:      [BrowserModule, Angular2GoogleChartModule],
    bootstrap:    [AppComponent]
})
export class AppModule {}
