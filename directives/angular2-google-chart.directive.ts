import {Directive, ElementRef, Input, Output, OnChanges, EventEmitter, HostBinding, HostListener} from '@angular/core';
declare const google: any;
declare let googleLoaded: any;
declare const googleChartsPackagesToLoad: any;
@Directive({
    selector: '[GoogleChart]'
})
export class GoogleChart implements OnChanges {
    public _element: any;
    @Input('chartType') public chartType: string;
    @Input('chartOptions') public chartOptions: Object;
    @Input('loadingDelay') public loadingDelay = 0;
    @Input('chartData') public chartData: Object;
    @Output('itemSelect') public itemSelect: EventEmitter<{ row: number, column: number }> = new EventEmitter();
    @Output('itemDeselect') public itemDeselect: EventEmitter<void> = new EventEmitter<void>();

    constructor(public element: ElementRef) {
        this._element = this.element.nativeElement;
    }

    ngOnChanges() {
        if (!googleLoaded) {
            googleLoaded = true;
            google.charts.load('current', {'packages': ['corechart', 'gauge']['orgchart']});
        }
        setTimeout(() => this.drawGraph(this.chartOptions, this.chartType, this.chartData, this._element), this.loadingDelay);
    }

    @HostListener('window:resize') onResize(event: Event) {
        this.drawGraph(this.chartOptions, this.chartType, this.chartData, this._element);
    }

    drawGraph(chartOptions, chartType, chartData, ele) {
        google.charts.setOnLoadCallback(drawChart);
        const self = this;

        function drawChart() {
            const wrapper = new google.visualization.ChartWrapper({
                chartType: chartType,
                dataTable: chartData,
                options: chartOptions || {}
            });
            wrapper.draw(ele);
            google.visualization.events.addListener(wrapper, 'select', function () {
                const selectedItem = wrapper.getChart().getSelection()[0];
                if (selectedItem) {
                    let msg;
                    if (selectedItem !== undefined) {
                        const selectedRowValues = [];
                        if (selectedItem.row !== null) {
                            selectedRowValues.push(wrapper.getDataTable().getValue(selectedItem.row, 0));
                            selectedRowValues.push(wrapper.getDataTable().getValue(selectedItem.row, selectedItem.column));
                            msg = {
                                message: 'select',
                                row: selectedItem.row,
                                column: selectedItem.column,
                                selectedRowValues: selectedRowValues
                            };
                        }
                    }
                    self.itemSelect.emit(msg);
                } else
                    self.itemDeselect.emit();
            });
        }
    }
}