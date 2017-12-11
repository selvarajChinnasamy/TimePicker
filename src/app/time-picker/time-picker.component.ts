import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent {
  shift1: FormGroup;
  shift2:FormGroup;
  mrg1=false; mrg2=false; mrg3=false;
  createTimeings(){
    return this.fb.group({
      hours: ['', [Validators.required]],
      minutes: ['', [Validators.required]],
      seasion: ['', [Validators.required]],
     });
  }
  createTimes(){
    return this.fb.group({
     startTime:this.fb.array([this.createTimeings()]),
     endTime:this.fb.array([this.createTimeings()]),
    });
  }
  buildForm(){
    this.shift1 = this.fb.group({
      'monday': this.fb.array([this.createTimes()]),
      'tuesday': this.fb.array([this.createTimes()]),
      'wednesday': this.fb.array([this.createTimes()]),
      'thursday': this.fb.array([this.createTimes()]),
      'friday': this.fb.array([this.createTimes()]),
      'saturday': this.fb.array([this.createTimes()]),
      'sunday': this.fb.array([this.createTimes()]),
    });
    this.shift2 = this.fb.group({
      'monday': this.fb.array([this.createTimes()]),
      'tuesday': this.fb.array([this.createTimes()]),
      'wednesday': this.fb.array([this.createTimes()]),
      'thursday': this.fb.array([this.createTimes()]),
      'friday': this.fb.array([this.createTimes()]),
      'saturday': this.fb.array([this.createTimes()]),
      'sunday': this.fb.array([this.createTimes()]),
    });
  }
  constructor(private fb: FormBuilder) { }
  ngOnInit(){
   this.buildForm();
  }
  getMonday(): FormArray {
    return <FormArray>this.shift1.controls['monday'];
  }
  increment(cntr){
    console.log(this.mrg1,this.mrg2,this.mrg3);
console.log(cntr);
if(cntr=='monmrg'){
  if(this.mrg1==true){
    (<FormControl>this.shift1.controls['monday'][0].controls['startTime'][0].controls['hours'].patchValue(0));
  }else if(this.mrg2==true){
    console.log(this.fb.array);
  }else if(this.mrg3==true){
    console.log(this.fb.array);
  }
}
  }
  decrement(cntr){
    console.log(this.mrg1,this.mrg2,this.mrg3);
console.log(cntr);
  }
}
