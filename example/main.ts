// import {bootstrap}    from '@angular/platform-browser-dynamic';
// import {AppComponent} from './app.component';

// bootstrap(AppComponent);
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);