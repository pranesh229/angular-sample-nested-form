import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { nameValidator } from './validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-sample-nested-form';
  myFormGroup: FormGroup;
  constructor(private fb: FormBuilder) {


    this.myFormGroup = this.fb.group({
      adminIdCtrl: ['', [Validators.required]],
      userDetails: this.fb.array([])
    })

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  submitForm(): void {
    this.myFormGroup.markAllAsTouched();
    console.warn(this.myFormGroup.value);
    console.warn(`Is the form invalid ${this.myFormGroup.valid}`);
  }


  get userDetails(): FormArray {
    return this.myFormGroup.get('userDetails') as FormArray;
  }
  addUserDetails(): void {
    const userDetailFormGroupTemplate = this.fb.group({
      name: ['', [Validators.required, nameValidator(new RegExp(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/))]],
      phone: ['', [Validators.required, Validators.pattern('[- +()0-9]+')]],
      email: ['', [Validators.required, Validators.email]]
    });
    this.userDetails.push(userDetailFormGroupTemplate);
  }
  deleteUserDetails(i: number): void {
    this.userDetails.removeAt(i);
  }
}
