import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InputOptions } from '../../../interfaces';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() options: InputOptions;
  @Input() control: FormControl;
  @Output() onKeypress: EventEmitter<any>;
  constructor() { 
    this.onKeypress = new EventEmitter();
  }

  ngOnInit() {
    
  }

  onChange(event) {
    console.log(this.control.value)
    this.onKeypress.emit(this.control.value);
  }
}
