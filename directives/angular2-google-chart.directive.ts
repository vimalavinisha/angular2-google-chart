import { Directive, ElementRef, Input, Output, OnChanges, EventEmitter, HostBinding, HostListener, OnDestroy } from '@angular/core';
declare const google: any;
declare let googleLoaded: any;
declare const googleChartsPackagesToLoad: any;

@Directive({
    selector: '[GoogleChart]'
})

export class GoogleChart implements OnChanges, OnDestroy {

    public el: HTMLElement;
    public wrapper: any;

    @Input('chartType') public chartType: string;
    @Input('chartOptions') public chartOptions: Object;
    @Input('loadingDelay') public loadingDelay = 0;
    @Input('chartData') public chartData: Object;
    @Output('itemSelect') public itemSelect: EventEmitter<{ row: number, column: number }> = new EventEmitter();
    @Output('itemDeselect') public itemDeselect: EventEmitter<void> = new EventEmitter<void>();

    constructor(public element: ElementRef) {
        this.el = this.element.nativeElement;
    }

    ngOnChanges() {
        if (!googleLoaded) {
            googleLoaded = true;
            google.charts.load('current', {'packages': ['corechart', 'gauge']['orgchart']});
        }
        setTimeout(() => this.drawGraph(this.chartOptions, this.chartType, this.chartData, this.el ), this.loadingDelay);
    }

    @HostListener('window:resize') onResize(event: Event) {
        this.drawGraph(this.chartOptions, this.chartType, this.chartData, this.el );
    }

    drawGraph(chartOptions, chartType, chartData, ele) {
        const drawChart = () => {
            this.wrapper = new google.visualization.ChartWrapper({
                chartType: chartType,
                dataTable: chartData,
                options: chartOptions || {}
            });
            
            this.wrapper.draw(ele);
            google.visualization.events.addListener(this.wrapper, 'select', () => {
                const selectedItem = this.wrapper.getChart().getSelection()[0];
                if (selectedItem) {
                    let msg;
                    if (selectedItem !== undefined) {
                        const selectedRowValues = [];
                        if (selectedItem.row !== null) {
                            var q = this.wrapper;
                            selectedRowValues.push(this.wrapper.getDataTable().getValue(selectedItem.row, 0));
                            selectedRowValues.push(this.wrapper.getDataTable().getValue(selectedItem.row, selectedItem.column ? selectedItem.column : 0 ));
                            msg = {
                                message: 'select',
                                row: selectedItem.row,
                                column: selectedItem.column,
                                selectedRowValues: selectedRowValues
                            };
                        }
                    }
                    this.itemSelect.emit(msg);
                } else {
                    this.itemDeselect.emit();
                }
            });
        }

        google.charts.setOnLoadCallback(() => {
            drawChart();
        });
    }

    ngOnDestroy() {
        if(this.wrapper && this.wrapper.getChart() && this.wrapper.getChart().clearChart) {
            this.wrapper.getChart().clearChart();
        }
    }
}
