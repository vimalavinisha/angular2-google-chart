
import {Directive, ElementRef, Input, OnChanges} from '@angular/core';
declare let google: any;
declare let googleLoaded: any;
declare let googleChartsPackagesToLoad: any;
@Directive({
  selector: '[GoogleChart]'
})

export class GoogleChart implements OnChanges {
  public _element: any;
  @Input('chartType') public chartType: string;
  @Input('chartOptions') public chartOptions: Object;
  @Input('chartData') public chartData: Object;
  constructor(public element: ElementRef) {
    this._element = this.element.nativeElement;
  }
  ngOnChanges() {
    if (!googleLoaded) {
      googleLoaded = true;
      google.charts.load('current', { 'packages': ['corechart', 'gauge']['orgchart'] });
    }
    setTimeout(() => this.drawGraph(this.chartOptions, this.chartType, this.chartData, this._element), 1000);
  }
  drawGraph(chartOptions, chartType, chartData, ele) {
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var wrapper;
      wrapper = new google.visualization.ChartWrapper({
        chartType: chartType,
        dataTable: chartData,
        options: chartOptions || {}
      });
      wrapper.draw(ele);

    }
  }
}
