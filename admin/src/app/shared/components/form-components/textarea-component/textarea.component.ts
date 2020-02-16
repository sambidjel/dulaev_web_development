import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InputOptions } from '../../../interfaces';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'textarea-component',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
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
