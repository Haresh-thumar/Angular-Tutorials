import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss']
})
export class DynamicInputComponent implements OnInit {

  constructor() { }

  hobbiesArray = new FormArray([new FormControl('', Validators.required)]);

  ngOnInit() {

  }

  addInputControl() {
    this.hobbiesArray.push(new FormControl('', Validators.required));
  }

  removeInputControl(idx: number) {
    this.hobbiesArray.removeAt(idx);
  }

}
