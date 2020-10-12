import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ModelModule} from '../model/model.module';
import {StoreComponent} from './StoreComponent';
import {CounterDirective} from './counter.directive';


@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule],
  declarations: [StoreComponent, CounterDirective],
  exports: [StoreComponent]
})
export class StoreModule { }
