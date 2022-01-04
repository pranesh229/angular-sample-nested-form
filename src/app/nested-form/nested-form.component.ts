import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss']
})
export class NestedFormComponent implements OnInit {
  @Input() nestedFormGroup!: any;
  @Input() userIndex!: number;
  @Output() deleteUserDetailsEvent = new EventEmitter<number>();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  deleteUserDetails(): void {
    this.deleteUserDetailsEvent.emit(this.userIndex);
  }
}
