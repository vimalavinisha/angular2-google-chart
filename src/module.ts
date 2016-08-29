import {NgModule} from '@angular/core';
import {GoogleChartDirective} from './directives/angular2-google-chart.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    GoogleChartDirective
  ],
  imports: [CommonModule],
  exports: [
    GoogleChartDirective
  ]
})
export class GoogleChartModule {

}
