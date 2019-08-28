import {Component} from '@angular/core';

import {AutoCompleteOptions} from 'ionic4-auto-complete';

import {SimpleService} from '../../services/simple-service.service';

@Component({
  selector:    'simple-service',
  templateUrl: 'simple-service.component.html',
  styleUrls: [
    'simple-service.component.scss'
  ]
})
export class SimpleServiceComponent {
  public options:AutoCompleteOptions;

  public selected:any = '';

  constructor(
      public provider:SimpleService
  ) {
    this.options = new AutoCompleteOptions();

    this.options.autocomplete = 'on';
    this.options.debounce = 750;
    this.options.placeholder = 'Type text to search..';
    this.options.type = 'add-friend.svg';
  }

  itemSelected(item:string) {
    console.log('Item selected:' +  item[this.provider.labelAttribute]);
  }
}
