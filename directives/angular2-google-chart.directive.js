System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var GoogleChart;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GoogleChart = (function () {
                function GoogleChart(element) {
                    this.element = element;
                    this._element = this.element.nativeElement;
                }
                GoogleChart.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!googleLoaded) {
                        googleLoaded = true;
                        google.charts.load('current', { 'packages': ['corechart', 'gauge'] });
                    }
                    setTimeout(function () { return _this.drawGraph(_this.chartOptions, _this.chartType, _this.chartData, _this._element); }, 1000);
                };
                GoogleChart.prototype.drawGraph = function (chartOptions, chartType, chartData, ele) {
                    google.charts.setOnLoadCallback(drawChart);
                    function drawChart() {
                        var wrapper;
                        wrapper = new google.visualization.ChartWrapper({
                            chartType: chartType,
                            dataTable: chartData,
                            options: chartOptions || {},
                            containerId: ele.id
                        });
                        wrapper.draw();
                    }
                };
                __decorate([
                    core_1.Input('chartType'), 
                    __metadata('design:type', String)
                ], GoogleChart.prototype, "chartType", void 0);
                __decorate([
                    core_1.Input('chartOptions'), 
                    __metadata('design:type', Object)
                ], GoogleChart.prototype, "chartOptions", void 0);
                __decorate([
                    core_1.Input('chartData'), 
                    __metadata('design:type', Object)
                ], GoogleChart.prototype, "chartData", void 0);
                GoogleChart = __decorate([
                    core_1.Directive({
                        selector: '[GoogleChart]',
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], GoogleChart);
                return GoogleChart;
            }());
            exports_1("GoogleChart", GoogleChart);
        }
    }
});
//# sourceMappingURL=angular2-google-chart.directive.js.map