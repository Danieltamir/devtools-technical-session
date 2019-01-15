import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JsDebuggingComponent} from './js-debugging/js-debugging.component';
import {NetworkComponent} from './network/network.component';
import {HtmlCssComponent} from './html-css/html-css.component';
import {PerformanceComponent} from './performance/performance.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
    {component: JsDebuggingComponent , path: 'js'},
    {component: NetworkComponent , path: 'network'},
    {component: HtmlCssComponent , path: 'html'},
    {component: PerformanceComponent , path: 'performance'},
    {component: HomeComponent , path: 'home'},
    {component: HomeComponent , path: '**'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
