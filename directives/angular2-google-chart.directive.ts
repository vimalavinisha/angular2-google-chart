import {Directive,ElementRef,Input,OnInit} from 'angular2/core';
declare var google:any;
declare var googleLoaded:any;
@Directive({
  selector: '[GoogleChart]',
  properties: [
      'chartType',
      'chartOptions',
      'chartData'
    ]
})
export class GoogleChart implements OnInit {
  public _element:any;
  @Input('chartType') public chartType:string;
  @Input('chartOptions') public chartOptions: Object;
  @Input('chartData') public chartData: Object;
  constructor(public element: ElementRef) {
    this._element = this.element.nativeElement;
  }
  ngOnInit() {
    if(!googleLoaded) {
      googleLoaded = true;
    google.charts.load('current', {'packages':['corechart', 'gauge']});
     }
    setTimeout(() =>this.drawGraph(this.chartOptions,this.chartType,this.chartData,this._element),1000);
    this.redrawGraph();
  }
  redrawGraph(){
      var self = this;
      window.setInterval(function () {
          self.drawGraph(self.chartOptions,self.chartType,self.chartData,self._element);
      }, 10000);
  }
  drawGraph (chartOptions,chartType,chartData,ele) {
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var wrapper;
       wrapper = new google.visualization.ChartWrapper({
             chartType: chartType,
             dataTable:chartData ,
             options:chartOptions || {},
             containerId: ele.id
           });
      wrapper.draw();
    }
  }
}

