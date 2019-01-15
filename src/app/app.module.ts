import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {JsDebuggingComponent} from './js-debugging/js-debugging.component';
import {HtmlCssComponent} from './html-css/html-css.component';
import {NetworkComponent} from './network/network.component';
import {PerformanceComponent} from './performance/performance.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        JsDebuggingComponent,
        HtmlCssComponent,
        NetworkComponent,
        PerformanceComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
