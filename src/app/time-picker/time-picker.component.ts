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
      hours: [0, [Validators.required]],
      minutes: [0, [Validators.required]],
      seasion: ['AM', [Validators.required]],
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
  increment(cntr){
    console.log(this.mrg1,this.mrg2,this.mrg3);
console.log(cntr);
if(cntr=='monmrg'){
  if(this.mrg1==true){
    let num=this.shift1.value.monday[0].startTime[0].hours+1;
    this.shift1.controls.monday.controls[0].controls.startTime.controls[0].controls.hours.setValue(num);
  }else if(this.mrg2==true){
    let num=this.shift1.value.monday[0].startTime[0].minutes+1;
    this.shift1.controls.monday.controls[0].controls.startTime.controls[0].controls.minutes.setValue(num);
  }else if(this.mrg3==true){
    let num=this.shift1.value.monday[0].startTime[0].seasion;
    if(num=='AM'){
      this.shift1.controls.monday.controls[0].controls.startTime.controls[0].controls.seasion.setValue('PM');
    }else{
      this.shift1.controls.monday.controls[0].controls.startTime.controls[0].controls.seasion.setValue('AM');
    }
  }
}else if(cntr=='moneve'){
  if(this.mrg1==true){
    let num=this.shift1.value.monday[0].endTime[0].hours+1;
    this.shift1.controls.monday.controls[0].controls.endTime.controls[0].controls.hours.setValue(num);
  }else if(this.mrg2==true){
    let num=this.shift1.value.monday[0].endTime[0].minutes+1;
    this.shift1.controls.monday.controls[0].controls.endTime.controls[0].controls.minutes.setValue(num);
  }else if(this.mrg3==true){
    let num=this.shift1.value.monday[0].endTime[0].seasion;
    if(num=='AM'){
      this.shift1.controls.monday.controls[0].controls.endTime.controls[0].controls.seasion.setValue('PM');
    }else{
      this.shift1.controls.monday.controls[0].controls.endTime.controls[0].controls.seasion.setValue('AM');
    }
}
  }
}
  decrement(cntr,se){
  if(cntr=='monday'){
    if(se=='mrg'){
      console.log(typeof(cntr));
      if(this.mrg1==true){
        let num=this.shift1.value.cntr[0].startTime[0].hours-1;
        this.shift1.controls.cntr.controls[0].controls.startTime.controls[0].controls.hours.setValue(num);
      }
    }
  }
}
}
