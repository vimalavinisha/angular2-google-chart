import {Directive, ElementRef, Input, OnInit} from '@angular/core';
declare var google: any;
declare var googleLoaded: any;
@Directive({
  selector: '[GoogleChart]'
})
export class GoogleChartDirective implements OnInit {
  public _element: any;
  private _chartType: string;
  private _chartOptions: Object;
  private _chartData: Object;
  private _inited: boolean;

  @Input('chartType')
  public set chartType(value: string) {
    this._chartType = value;
    this.draw();
  }

  public get chartType(): string {
    return this._chartType
  }

  @Input('chartOptions')
  public set chartOptions(value: Object) {
    this._chartOptions = value;
    this.draw();
  }

  public get chartOptions(): Object {
    return this._chartOptions
  }

  @Input('chartData')
  public set chartData(value: Object) {
    this._chartData = value;
    this.draw();
  }

  public get chartData(): Object {
    return this._chartData
  }

  constructor(public element: ElementRef) {
    this._element = this.element.nativeElement;
  }

  ngOnInit() {
    if (!googleLoaded) {
      googleLoaded = true;
      google.charts.load('current', {'packages': ['corechart', 'gauge']});
    }
    this._inited = true;
    this.draw();
  }

  private draw(): void {
    if (!this._inited)
      return;
    this.drawGraph(this.chartOptions, this.chartType, this.chartData, this._element);
  }

  private drawGraph(chartOptions: Object, chartType: string, chartData: Object, ele: any) {
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var wrapper: any;
      wrapper = new google.visualization.ChartWrapper({
        chartType: chartType,
        dataTable: chartData,
        options: chartOptions || {},
        containerId: ele.id
      });
      wrapper.draw();
    }
  }
}

