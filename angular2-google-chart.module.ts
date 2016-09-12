import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { GoogleChart }    from './directives/angular2-google-chart.directive';

@NgModule({
    declarations: [GoogleChart],
    exports:      [GoogleChart]
})
export class Angular2GoogleChartModule {}
