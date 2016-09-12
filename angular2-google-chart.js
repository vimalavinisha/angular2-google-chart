System.register(['@angular/core', './directives/angular2-google-chart.directive'], function(exports_1, context_1) {
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
    var core_1, angular2_google_chart_directive_1;
    var Angular2GoogleChartModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_google_chart_directive_1_1) {
                angular2_google_chart_directive_1 = angular2_google_chart_directive_1_1;
            }],
        execute: function() {
            Angular2GoogleChartModule = (function () {
                function Angular2GoogleChartModule() {
                }
                Angular2GoogleChartModule = __decorate([
                    core_1.NgModule({
                        declarations: [angular2_google_chart_directive_1.GoogleChart],
                        exports: [angular2_google_chart_directive_1.GoogleChart]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Angular2GoogleChartModule);
                return Angular2GoogleChartModule;
            }());
            exports_1("Angular2GoogleChartModule", Angular2GoogleChartModule);
        }
    }
});
//# sourceMappingURL=angular2-google-chart.js.map