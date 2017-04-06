
import {Directive, ElementRef, Input, OnInit} from '@angular/core';
declare var google: any;
declare var googleLoaded: any;
declare var googleChartsPackagesToLoad: any;
@Directive({
    selector: '[GoogleChart]',
    // properties: [
    //     'chartType',
    //     'chartOptions',
    //     'chartData'
    //   ]
})

export class GoogleChart implements OnInit {
  public _element:any;
  @Input('chartType') public chartType:string;
  @Input('chartOptions') public chartOptions: Object;
  @Input('chartData') public chartData: Object;
  constructor(public element: ElementRef) {
    this._element = this.element.nativeElement;
  }
  ngOnChanges() {
    if(!googleLoaded) {
      googleLoaded = true;
    google.charts.load('current', {'packages':['corechart', 'gauge']});
     }
    setTimeout(() =>this.drawGraph(this.chartOptions,this.chartType,this.chartData,this._element),1000);
  }
    ngOnInit() {
        setTimeout(() => {
            google.charts.load('current', {
                'packages': ['corechart']
            });
            setTimeout(() => {
                this.drawGraph(this.chartOptions, this.chartType, this.chartData, this._element)
            }, 1000);
        }, 1000);
    }
  drawGraph (chartOptions,chartType,chartData,ele) {
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var wrapper;
       wrapper = new google.visualization.ChartWrapper({
             chartType: chartType,
             dataTable:chartData ,
             options:chartOptions || {}
           });
      wrapper.draw(ele);

    }
}
}
