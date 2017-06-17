System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, GoogleChart;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            GoogleChart = (function () {
                function GoogleChart(element) {
                    this.element = element;
                    this.loadingDelay = 0;
                    this.itemSelect = new core_1.EventEmitter();
                    this.itemDeselect = new core_1.EventEmitter();
                    this._element = this.element.nativeElement;
                }
                GoogleChart.prototype.ngOnChanges = function () {
                    var _this = this;
                    if (!googleLoaded) {
                        googleLoaded = true;
                        google.charts.load('current', { 'packages': ['corechart', 'gauge']['orgchart'] });
                    }
                    setTimeout(function () { return _this.drawGraph(_this.chartOptions, _this.chartType, _this.chartData, _this._element); }, this.loadingDelay);
                };
                GoogleChart.prototype.onResize = function (event) {
                    this.drawGraph(this.chartOptions, this.chartType, this.chartData, this._element);
                };
                GoogleChart.prototype.drawGraph = function (chartOptions, chartType, chartData, ele) {
                    google.charts.setOnLoadCallback(drawChart);
                    var self = this;
                    function drawChart() {
                        var wrapper = new google.visualization.ChartWrapper({
                            chartType: chartType,
                            dataTable: chartData,
                            options: chartOptions || {}
                        });
                        wrapper.draw(ele);
                        google.visualization.events.addListener(wrapper, 'select', function () {
                            var selectedItem = wrapper.getChart().getSelection()[0];
                            if (selectedItem) {
                                var msg = void 0;
                                if (selectedItem !== undefined) {
                                    var selectedRowValues = [];
                                    if (selectedItem.row !== null) {
                                        var dataTable = wrapper.getDataTable();
                                        var numberOfColumns = dataTable.getNumberOfColumns();
                                        selectedRowValues.push(dataTable.getValue(selectedItem.row, 0));
                                        selectedRowValues.push(dataTable.getValue(selectedItem.row, selectedItem.column));
                                    }
                                    msg = (_a = {
                                            message: 'select',
                                            row: selectedItem.row,
                                            column: selectedItem.column
                                        },
                                        _a['selectedRowValues'] = selectedRowValues,
                                        _a);
                                }
                                self.itemSelect.emit(msg);
                            }
                            var _a;
                        });
                    }
                };
                return GoogleChart;
            }());
            __decorate([
                core_1.Input('chartType'),
                __metadata("design:type", String)
            ], GoogleChart.prototype, "chartType", void 0);
            __decorate([
                core_1.Input('chartOptions'),
                __metadata("design:type", Object)
            ], GoogleChart.prototype, "chartOptions", void 0);
            __decorate([
                core_1.Input('loadingDelay'),
                __metadata("design:type", Number)
            ], GoogleChart.prototype, "loadingDelay", void 0);
            __decorate([
                core_1.Input('chartData'),
                __metadata("design:type", Object)
            ], GoogleChart.prototype, "chartData", void 0);
            __decorate([
                core_1.Output('itemSelect'),
                __metadata("design:type", core_1.EventEmitter)
            ], GoogleChart.prototype, "itemSelect", void 0);
            __decorate([
                core_1.Output('itemDeselect'),
                __metadata("design:type", core_1.EventEmitter)
            ], GoogleChart.prototype, "itemDeselect", void 0);
            GoogleChart = __decorate([
                core_1.Directive({
                    selector: '[GoogleChart]',
                    host: {
                        '(window:resize)': 'onResize($event)'
                    }
                    // properties: [
                    //     'chartType',
                    //     'chartOptions',
                    //     'chartData'
                    //   ]
                }),
                __metadata("design:paramtypes", [core_1.ElementRef])
            ], GoogleChart);
            exports_1("GoogleChart", GoogleChart);
        }
    };
});
//# sourceMappingURL=angular2-google-chart.directive.js.map