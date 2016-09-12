Angular2
=========

The sources for this package are in (https://github.com/vimalavinisha/angular2-google-chart) repo. Please file issues and pull requests against this repo.
## Demo Output
  ![angular2-google-chart-v1 0 5](https://cloud.githubusercontent.com/assets/11042288/16228824/f30a4436-37d6-11e6-8d05-bdc8bc090fcc.png)
##Usage
    node install
      npm install angular2-google-chart
    bower install
      bower install google-chart
###1. In index.html page include following script:
      <script src="https://www.gstatic.com/charts/loader.js"></script>
      <script>  
      !important: You want to give this variable(var googleLoaded = false;). This is used to run multiple chart in your jade.
        var googleLoaded = false;
        </script>
###2. In app.module, import the included Angular2GoogleChartModule:
      import { NgModule }       from '@angular/core';
      import { BrowserModule  } from '@angular/platform-browser';
      import { Angular2GoogleChartModule } from 'angular2-google-chart/angular2-google-chart';

      import { AppComponent }   from './app.component';

      @NgModule({
          declarations: [AppComponent],
          imports:      [BrowserModule, Angular2GoogleChartModule],
          bootstrap:    [AppComponent]
      })
      export class AppModule {}

###3. In your component file use like so:
      import {Component} from '@angular/core';

       @Component({
           selector : 'my-app',
           template:  `
           <div id="line_chart",[chartData]="line_ChartData", [chartOptions] = "line_ChartOptions",chartType="LineChart",GoogleChart/>
           <div id="bubble_chart",[chartData]="bubble_ChartData", [chartOptions] = "bubble_ChartOptions",chartType="BubbleChart",GoogleChart/>
           <div id="scatter_chart",[chartData]="scatter_ChartData", [chartOptions] = "scatter_ChartOptions",chartType="ScatterChart",GoogleChart/>
           <div id="candle_chart",[chartData]="candle_ChartData", [chartOptions] = "candle_ChartOptions",chartType="CandlestickChart",GoogleChart/>    
           <div id="pie_chart",[chartData]="pie_ChartData", [chartOptions] = "pie_ChartOptions",chartType="PieChart",GoogleChart/>    
           <div id="bar_chart",[chartData]="bar_ChartData", [chartOptions] = "bar_ChartOptions",chartType="BarChart",GoogleChart/>`    
       })
       export class AppComponent {
          public line_ChartData = [
                 ['Year', 'Sales', 'Expenses'],
                 ['2004',  1000,      400],
                 ['2005',  1170,      460],
                 ['2006',  660,       1120],
                 ['2007',  1030,      540]];
          public bubble_ChartData = [
               ['ID', 'Life Expectancy', 'Fertility Rate', 'Region',     'Population'],
               ['CAN',    80.66,              1.67,      'North America',  33739900],
               ['DEU',    79.84,              1.36,      'Europe',         81902307],
               ['DNK',    78.6,               1.84,      'Europe',         5523095],
               ['EGY',    72.73,              2.78,      'Middle East',    79716203],
               ['GBR',    80.05,              2,         'Europe',         61801570],
               ['IRN',    72.49,              1.7,       'Middle East',    73137148],
               ['IRQ',    68.09,              4.77,      'Middle East',    31090763],
               ['ISR',    81.55,              2.96,      'Middle East',    7485600],
               ['RUS',    68.6,               1.54,      'Europe',         141850000],
               ['USA',    78.09,              2.05,      'North America',  307007000]];
          public scatter_ChartData =  [
                  ['Date', 'Sales Percentage'],
                  [new Date(2016, 3, 22), 78],
                  [new Date(2016, 3, 21,9,30,2),88],
                  [new Date(2016, 3, 20), 67],
                  [new Date(2016, 3, 19,8,34,7), 98],
                  [new Date(2016, 3, 18,15,34,7),95],
                  [new Date(2016, 3, 16,7,30,45),89],
                  [new Date(2016, 3, 16,15,40,35),68]
                ];
          public candle_ChartData = [
                 ['Day','Low','Opening value','Closing value','High'],
                 ['Mon', 28, 28, 38, 38],
                 ['Tue', 38, 38, 55, 55],
                 ['Wed', 55, 55, 77, 77],
                 ['Thu', 77, 77, 66, 66],
                 ['Fri', 66, 66, 22, 22]
               ];
           public pie_ChartData = [
                     ['Task', 'Hours per Day'],
                     ['Work',     11],
                     ['Eat',      2],
                     ['Commute',  2],
                     ['Watch TV', 2],
                     ['Sleep',    7] ];
           public bar_ChartData = [
                   ['City', '2010 Population', '2000 Population'],
                   ['New York City, NY', 8175000, 8008000],
                   ['Los Angeles, CA', 3792000, 3694000],
                   ['Chicago, IL', 2695000, 2896000],
                   ['Houston, TX', 2099000, 1953000],
                   ['Philadelphia, PA', 1526000, 1517000]];
           public line_ChartOptions = {
             title: 'Company Performance',
             curveType: 'function',
             legend: { position: 'bottom'
             }
           };
           public bubble_ChartOptions= {
             title: 'Correlation between life expectancy, fertility rate ' +
                           'and population of some world countries (2010)',
                    hAxis: {title: 'Life Expectancy'},
                    vAxis: {title: 'Fertility Rate'},
                    bubble: {textStyle: {fontSize: 11}}

           };
           public candle_ChartOptions = {
             legend: 'none',
                      bar: { groupWidth: '100%' }, // Remove space between bars.
                      candlestick: {
                        fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
                        risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
                      }
           };
           public scatter_ChartOptions = {
             legend: { position: 'bottom'
                      }
               title: 'Company Sales Percentage',
           };
           public bar_ChartOptions = {
             title: 'Population of Largest U.S. Cities',
                  chartArea: {width: '50%'},
                  hAxis: {
                    title: 'Total Population',
                    minValue: 0,
                    textStyle: {
                      bold: true,
                      fontSize: 12,
                      color: '#4d4d4d'
                    },
                    titleTextStyle: {
                      bold: true,
                      fontSize: 18,
                      color: '#4d4d4d'
                    }
                  },
                  vAxis: {
                    title: 'City',
                    textStyle: {
                      fontSize: 14,
                      bold: true,
                      color: '#848484'
                    },
                    titleTextStyle: {
                      fontSize: 14,
                      bold: true,
                      color: '#848484'
                    }
                  }
                };
           public pie_ChartOptions  = {
             title: 'My Daily Activities'
             width: 900,
             height: 500
           };
       }
###4. Example Charts:
      <img src="../app/assets/images/google-charts-output.png">
