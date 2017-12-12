import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent {
  shift1: FormGroup;
  shift2: FormGroup; 
  monday1=false;monday2=false;monday3=false;monday4=false;
  tuesday1=false;tuesday2=false;tuesday3=false;tuesday4=false;
  wednesday1=false;wednesday2=false;wednesday3=false;wednesday4=false;  
  thursday1=false;thursday2=false;thursday3=false;thursday4=false;
  friday1=false;friday2=false;friday3=false;friday4=false;   
  saturday1=false;saturday2=false;saturday3=false;saturday4=false;
  sunday1=false;sunday2=false;sunday3=false;sunday4=false;     
  days=['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
  mrg1 = false; mrg2 = false; mrg3 = false;
  createTimeings() {
    return this.fb.group({
      hours: [0, [Validators.required]],
      minutes: [0, [Validators.required]],
      seasion: ['AM', [Validators.required]],
    });
  }
  createTimes() {
    return this.fb.group({
      startTime: this.fb.array([this.createTimeings()]),
      endTime: this.fb.array([this.createTimeings()]),
    });
  }
  buildForm() {
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
  ngOnInit() {
    this.buildForm();
  }
//Apply All 
  applyforAll(form){
    let starthour = this[form].value.monday[0].startTime[0].hours;
    let startmin = this[form].value.monday[0].startTime[0].minutes;
    let startses = this[form].value.monday[0].startTime[0].seasion;
    let endhour = this[form].value.monday[0].endTime[0].hours;
    let endmin = this[form].value.monday[0].endTime[0].minutes;
    let endses = this[form].value.monday[0].endTime[0].seasion;
    console.log('Start Time:'+starthour+':'+startmin+startses);
    console.log('End Time:'+endhour+':'+endmin+endses);
    for(let i=1;i<this.days.length;i++){
      this[form].controls[this.days[i]].controls[0].controls.startTime.controls[0].controls.hours.setValue(starthour);
      this[form].controls[this.days[i]].controls[0].controls.startTime.controls[0].controls.minutes.setValue(startmin);
      this[form].controls[this.days[i]].controls[0].controls.startTime.controls[0].controls.seasion.setValue(startses);
      this[form].controls[this.days[i]].controls[0].controls.endTime.controls[0].controls.hours.setValue(endhour);
      this[form].controls[this.days[i]].controls[0].controls.endTime.controls[0].controls.minutes.setValue(endmin);
      this[form].controls[this.days[i]].controls[0].controls.endTime.controls[0].controls.seasion.setValue(endses);
    }

  }


  //Increment Decrement
  valueUpdate(cntr, tim, val,form) {
    if ((cntr == 'inc') && (tim == 'start')) {
      if (this.mrg1 == true) {
        let num = this[form].value[val][0].startTime[0].hours + 1;
        this[form].controls[val].controls[0].controls.startTime.controls[0].controls.hours.setValue(num);
      } else if (this.mrg2 == true) {
        let num = this[form].value[val][0].startTime[0].minutes + 1;
        this[form].controls[val].controls[0].controls.startTime.controls[0].controls.minutes.setValue(num);
      } else if (this.mrg3 == true) {
        let num = this[form].value[val][0].startTime[0].seasion;
        if (num == 'AM') {
          this[form].controls[val].controls[0].controls.startTime.controls[0].controls.seasion.setValue('PM');
        } else {
          this[form].controls[val].controls[0].controls.startTime.controls[0].controls.seasion.setValue('AM');
        }
      }
    } else if ((cntr == 'inc') && (tim == 'end')) {
      if (this.mrg1 == true) {
        let num = this[form].value[val][0].endTime[0].hours + 1;
        this[form].controls[val].controls[0].controls.endTime.controls[0].controls.hours.setValue(num);
      } else if (this.mrg2 == true) {
        let num = this[form].value[val][0].endTime[0].minutes + 1;
        this[form].controls[val].controls[0].controls.endTime.controls[0].controls.minutes.setValue(num);
      } else if (this.mrg3 == true) {
        let num = this[form].value[val][0].endTime[0].seasion;
        if (num == 'AM') {
          this[form].controls[val].controls[0].controls.endTime.controls[0].controls.seasion.setValue('PM');
        } else {
          this[form].controls[val].controls[0].controls.endTime.controls[0].controls.seasion.setValue('AM');
        }
      }
    } else if ((cntr == 'dec') && (tim == 'start')) {
      if (this.mrg1 == true) {
        let num = this[form].value[val][0].startTime[0].hours - 1;
        this[form].controls[val].controls[0].controls.startTime.controls[0].controls.hours.setValue(num);
      } else if (this.mrg2 == true) {
        let num = this[form].value[val][0].startTime[0].minutes - 1;
        this[form].controls[val].controls[0].controls.startTime.controls[0].controls.minutes.setValue(num);
      } else if (this.mrg3 == true) {
        let num = this[form].value[val][0].startTime[0].seasion;
        if (num == 'AM') {
          this[form].controls[val].controls[0].controls.startTime.controls[0].controls.seasion.setValue('PM');
        } else {
          this[form].controls[val].controls[0].controls.startTime.controls[0].controls.seasion.setValue('AM');
        }
      }
    } else if ((cntr == 'dec') && (tim == 'end')) {
      if (this.mrg1 == true) {
        let num = this[form].value[val][0].endTime[0].hours - 1;
        this[form].controls[val].controls[0].controls.endTime.controls[0].controls.hours.setValue(num);
      } else if (this.mrg2 == true) {
        let num = this[form].value[val][0].endTime[0].minutes - 1;
        this[form].controls[val].controls[0].controls.endTime.controls[0].controls.minutes.setValue(num);
      } else if (this.mrg3 == true) {
        let num = this[form].value[val][0].endTime[0].seasion;
        if (num == 'AM') {
          this[form].controls[val].controls[0].controls.endTime.controls[0].controls.seasion.setValue('PM');
        } else {
          this[form].controls[val].controls[0].controls.endTime.controls[0].controls.seasion.setValue('AM');
        }
      }
    }
  }
/* */

//Copy Above
copytheAbove(form,day){
  let i=0;
for(i=0;i<this.days.length;i++){
  if(this.days[i]==day){
    break;
  }
}
console.log(i);
let starthour = this[form].value[this.days[i-1]][0].startTime[0].hours;
let startmin = this[form].value[this.days[i-1]][0].startTime[0].minutes;
let startses = this[form].value[this.days[i-1]][0].startTime[0].seasion;
let endhour = this[form].value[this.days[i-1]][0].endTime[0].hours;
let endmin = this[form].value[this.days[i-1]][0].endTime[0].minutes;
let endses = this[form].value[this.days[i-1]][0].endTime[0].seasion;
this[form].controls[this.days[i]].controls[0].controls.startTime.controls[0].controls.hours.setValue(starthour);
this[form].controls[this.days[i]].controls[0].controls.startTime.controls[0].controls.minutes.setValue(startmin);
this[form].controls[this.days[i]].controls[0].controls.startTime.controls[0].controls.seasion.setValue(startses);
this[form].controls[this.days[i]].controls[0].controls.endTime.controls[0].controls.hours.setValue(endhour);
this[form].controls[this.days[i]].controls[0].controls.endTime.controls[0].controls.minutes.setValue(endmin);
this[form].controls[this.days[i]].controls[0].controls.endTime.controls[0].controls.seasion.setValue(endses);
}
starthour(form,day){
  let starthour = this[form].value[day][0].startTime[0].hours;
  return starthour;
}
startmin(form,day){
  let startmin = this[form].value[day][0].startTime[0].minutes;
  return startmin;
}
startses(form,day){
  let startses = this[form].value[day][0].startTime[0].seasion;
  return startses;
}
endhour(form,day){
  let endhour = this[form].value[day][0].endTime[0].hours;
  return endhour;
}
endmin(form,day){
  let endmin = this[form].value[day][0].endTime[0].minutes;
  return endmin;
}
endses(form,day){
  let endses = this[form].value[day][0].endTime[0].seasion;
  return endses;
}

addhours(startses,endses,starthour,endhour){
  if(startses=='AM'){
    if(endses=='PM'){
      endhour=endhour+12;
    }else if(endses=='AM'){
      if(starthour>=endhour){
        endhour=endhour+24;
      }
    }
  }else{
    if(endses=='PM'){
      if(starthour>=endhour){
        endhour=endhour+24;
      }
      else{
        endhour=endhour+12;
      }
    }else if(endses=='AM'){
      endhour=endhour+24;
  }
  }
  return endhour;
}

save(){

  let form='shift1'
 
  console.log('Start Time:'+this.starthour(form,'monday')+':'+this.startmin(form,'monday')+this.startses(form,'monday'));
  console.log('End Time:'+this.endhour(form,'monday')+':'+this.endmin(form,'monday')+this.endses(form,'monday'));

 
let  mondaystart    = moment('2017-12-11'),
   mondayend    = moment('2017-12-11'),
  tuesdaystart= moment('2017-12-12'),
  tuesdayend= moment('2017-12-12'),
  wednesdaystart= moment('2017-12-13'),
  wednesdayend= moment('2017-12-13'),
  thursdaystart=moment('2017-12-14'),
  thursdayend=moment('2017-12-14'),
  fridaystart=moment('2017-12-15'),
  fridayend=moment('2017-12-15'),
  saturdaystart=moment('2017-12-16'),
  saturdayend=moment('2017-12-16'),
  sundaystart=moment('2017-12-17'),
  sundayend=moment('2017-12-17')

mondaystart.set({
  hour:   this.starthour(form,'monday'),
  minute: this.startmin(form,'monday'),
});

mondayend.set({
  hour:  this.addhours(this.startses(form,'monday'),this.endses(form,'monday'),this.starthour(form,'monday'),this.endhour(form,'monday')),
  minute: this.endmin(form,'monday'),
});

tuesdaystart.set({
  hour:   this.starthour(form,'tuesday'),
  minute: this.startmin(form,'tuesday'),
});

tuesdayend.set({
  hour:  this.addhours(this.startses(form,'tuesday'),this.endses(form,'tuesday'),this.starthour(form,'tuesday'),this.endhour(form,'tuesday')),
  minute: this.endmin(form,'tuesday'),
});

wednesdaystart.set({
  hour:   this.starthour(form,'wednesday'),
  minute: this.startmin(form,'wednesday'),
});

wednesdayend.set({
  hour:  this.addhours(this.startses(form,'wednesday'),this.endses(form,'wednesday'),this.starthour(form,'wednesday'),this.endhour(form,'wednesday')),
  minute: this.endmin(form,'wednesday'),
});

thursdaystart.set({
  hour:   this.starthour(form,'thursday'),
  minute: this.startmin(form,'thursday'),
});

thursdayend.set({
  hour:  this.addhours(this.startses(form,'thursday'),this.endses(form,'thursday'),this.starthour(form,'thursday'),this.endhour(form,'thursday')),
  minute: this.endmin(form,'thursday'),
});

fridaystart.set({
  hour:   this.starthour(form,'friday'),
  minute: this.startmin(form,'friday'),
});

fridayend.set({
  hour:  this.addhours(this.startses(form,'friday'),this.endses(form,'friday'),this.starthour(form,'friday'),this.endhour(form,'friday')),
  minute: this.endmin(form,'friday'),
});

saturdaystart.set({
  hour:   this.starthour(form,'saturday'),
  minute: this.startmin(form,'saturday'),
});

saturdayend.set({
  hour:  this.addhours(this.startses(form,'saturday'),this.endses(form,'saturday'),this.starthour(form,'saturday'),this.endhour(form,'saturday')),
  minute: this.endmin(form,'saturday'),
});

sundaystart.set({
  hour:   this.starthour(form,'sunday'),
  minute: this.startmin(form,'sunday'),
});

sundayend.set({
  hour:  this.addhours(this.startses(form,'sunday'),this.endses(form,'sunday'),this.starthour(form,'sunday'),this.endhour(form,'sunday')),
  minute: this.endmin(form,'sunday'),
});

let calc=['mondayend','tuesdayend','wednesdayend','thursdayend','fridayend','saturdayend','sundayend']; 


let  mondaystart1    = moment('2017-12-11'),
mondayend1    = moment('2017-12-11'),
tuesdaystart1= moment('2017-12-12'),
tuesdayend1= moment('2017-12-12'),
wednesdaystart1= moment('2017-12-13'),
wednesdayend1= moment('2017-12-13'),
thursdaystart1=moment('2017-12-14'),
thursdayend1=moment('2017-12-14'),
fridaystart1=moment('2017-12-15'),
fridayend1=moment('2017-12-15'),
saturdaystart1=moment('2017-12-16'),
saturdayend1=moment('2017-12-16'),
sundaystart1=moment('2017-12-17'),
sundayend1=moment('2017-12-17')

mondaystart1.set({
  hour:   this.starthour('shift2','monday'),
  minute: this.startmin('shift2','monday'),
  });
  
  mondayend1.set({
  hour:  this.addhours(this.startses('shift2','monday'),this.endses('shift2','monday'),this.starthour('shift2','monday'),this.endhour('shift2','monday')),
  minute: this.endmin('shift2','monday'),
  });
  
  tuesdaystart1.set({
  hour:   this.starthour('shift2','tuesday'),
  minute: this.startmin('shift2','tuesday'),
  });
  
  tuesdayend1.set({
  hour:  this.addhours(this.startses('shift2','tuesday'),this.endses('shift2','tuesday'),this.starthour('shift2','tuesday'),this.endhour('shift2','tuesday')),
  minute: this.endmin('shift2','tuesday'),
  });
  
  wednesdaystart1.set({
  hour:   this.starthour('shift2','wednesday'),
  minute: this.startmin('shift2','wednesday'),
  });
  
  wednesdayend1.set({
  hour:  this.addhours(this.startses('shift2','wednesday'),this.endses('shift2','wednesday'),this.starthour('shift2','wednesday'),this.endhour('shift2','wednesday')),
  minute: this.endmin('shift2','wednesday'),
  });
  
  thursdaystart1.set({
  hour:   this.starthour('shift2','thursday'),
  minute: this.startmin('shift2','thursday'),
  });
  
  thursdayend1.set({
  hour:  this.addhours(this.startses('shift2','thursday'),this.endses('shift2','thursday'),this.starthour('shift2','thursday'),this.endhour('shift2','thursday')),
  minute: this.endmin('shift2','thursday'),
  });
  
  fridaystart1.set({
  hour:   this.starthour('shift2','friday'),
  minute: this.startmin('shift2','friday'),
  });
  
  fridayend1.set({
  hour:  this.addhours(this.startses('shift2','friday'),this.endses('shift2','friday'),this.starthour('shift2','friday'),this.endhour('shift2','friday')),
  minute: this.endmin('shift2','friday'),
  });
  
  saturdaystart1.set({
  hour:   this.starthour('shift2','saturday'),
  minute: this.startmin('shift2','saturday'),
  });
  
  saturdayend1.set({
  hour:  this.addhours(this.startses('shift2','saturday'),this.endses('shift2','saturday'),this.starthour('shift2','saturday'),this.endhour('shift2','saturday')),
  minute: this.endmin('shift2','saturday'),
  });
  
  sundaystart1.set({
  hour:   this.starthour('shift2','sunday'),
  minute: this.startmin('shift2','sunday'),
  });
  
  sundayend1.set({
  hour:  this.addhours(this.startses('shift2','sunday'),this.endses('shift2','sunday'),this.starthour('shift2','sunday'),this.endhour('shift2','sunday')),
  minute: this.endmin('shift2','sunday'),
  });



  var duration = moment.duration(tuesdaystart1.diff(mondayend1));
  var hours = duration.asHours();
  console.log('Diff:'+hours);
  if((hours<=0)||(hours>24)){
    this.monday3=true;
    this.monday4=true;
    this.tuesday3=true;
    this.tuesday4=true;
    console.log('err');
    console.log(mondaystart1._d);
    console.log(mondayend1._d);
    console.log(tuesdaystart1._d);
    console.log(tuesdayend1._d);
  }else{
    this.monday3=false;
    this.monday4=false;
    this.tuesday3=false;
    this.tuesday4=false;
  }


  duration = moment.duration(tuesdaystart.diff(mondayend));
  hours = duration.asHours();
  console.log('Diff:'+hours);
  if((hours<=0)||(hours>24)){
    this.monday1=true;
    this.monday2=true;
    this.tuesday1=true;
    this.tuesday2=true;
    console.log('err');
    console.log(mondaystart._d);
    console.log(mondayend._d);
    console.log(tuesdaystart._d);
    console.log(tuesdayend._d);
  }else{
    this.monday1=false;
    this.monday2=false;
    this.tuesday1=false;
    this.tuesday2=false;
  }



  duration = moment.duration(mondaystart1.diff(mondayend));
  hours = duration.asHours();
  console.log('Diff:'+hours);
  if((hours<=0)||(hours>=24)){
    this.monday1=true;
    this.monday2=true;
    this.monday3=true;
    this.monday4=true;
    console.log('err');
    console.log(mondaystart._d);
    console.log(mondayend._d);
    console.log(mondaystart1._d);
    console.log(mondayend1._d);
  }else{
    this.monday1=false;
    this.monday2=false;
    this.monday3=false;
    this.monday4=false;
  }

  duration = moment.duration(wednesdaystart.diff(tuesdayend));
  hours = duration.asHours();
  console.log('Diff'+hours);
  if((hours<=0)||(hours>=24)){
    this.tuesday1=true;
    this.tuesday2=true;
    this.wednesday1=true;
    this.wednesday2=true;
    console.log('err');
    console.log(tuesdaystart._d);
    console.log(tuesdayend._d);
    console.log(wednesdaystart._d);
    console.log(wednesdayend._d);
  }else{
    this.tuesday1=false;
    this.tuesday2=false;
    this.wednesday1=false;
    this.wednesday2=false;
  }
  

  duration = moment.duration(wednesdaystart1.diff(tuesdayend1));
  hours = duration.asHours();
  console.log('Diff'+hours);
  if((hours<=0)||(hours>=24)){
    this.tuesday3=true;
    this.tuesday4=true;
    this.wednesday3=true;
    this.wednesday4=true;
    console.log('err');
    console.log(tuesdaystart1._d);
    console.log(tuesdayend1._d);
    console.log(wednesdaystart1._d);
    console.log(wednesdayend1._d);
  }else{
    this.tuesday3=false;
    this.tuesday4=false;
    this.wednesday3=false;
    this.wednesday4=false;
  }



  duration = moment.duration(thursdaystart.diff(wednesdayend));
  hours = duration.asHours();
  console.log('Diff'+hours);
  if((hours<=0)||(hours>=24)){
    this.thursday1=true;
    this.thursday2=true;
    this.wednesday1=true;
    this.wednesday2=true;
    console.log('err');
    console.log(wednesdaystart._d);
    console.log(wednesdayend._d);
    console.log(thursdaystart._d);
    console.log(thursdayend._d);
  }else{
    this.thursday1=false;
    this.thursday2=false;
    this.wednesday1=false;
    this.wednesday2=false;
  }


  duration = moment.duration(thursdaystart1.diff(wednesdayend1));
  hours = duration.asHours();
  console.log('Diff'+hours);
  if((hours<=0)||(hours>=24)){
    this.thursday3=true;
    this.thursday4=true;
    this.wednesday3=true;
    this.wednesday4=true;
    console.log('err');
    console.log(wednesdaystart1._d);
    console.log(wednesdayend1._d);
    console.log(thursdaystart1._d);
    console.log(thursdayend1._d);
  }else{
    this.thursday3=false;
    this.thursday4=false;
    this.wednesday3=false;
    this.wednesday4=false;
  }
  
  
  duration = moment.duration(fridaystart.diff(thursdayend));
  hours = duration.asHours();
  console.log('Diff'+hours);
  if((hours<=0)||(hours>=24)){
    this.thursday1=true;
    this.thursday2=true;
    this.friday1=true;
    this.friday2=true;
    console.log('err');
    console.log(thursdaystart._d);
    console.log(thursdayend._d);
    console.log(fridaystart._d);
    console.log(fridayend._d);
  }else{
    this.thursday1=false;
    this.thursday2=false;
    this.friday1=false;
    this.friday2=false;
  }


  duration = moment.duration(fridaystart1.diff(thursdayend1));
  hours = duration.asHours();
  console.log('Diff'+hours);
  if((hours<=0)||(hours>=24)){
    this.thursday3=true;
    this.thursday4=true;
    this.friday3=true;
    this.friday4=true;
    console.log('err');
    console.log(thursdaystart1._d);
    console.log(thursdayend1._d);
    console.log(fridaystart1._d);
    console.log(fridayend1._d);
  }else{
    this.thursday3=false;
    this.thursday4=false;
    this.friday3=false;
    this.friday4=false;
  }
  
  
  duration = moment.duration(saturdaystart.diff(fridayend));
  hours = duration.asHours();
  console.log('Diff'+hours);
  if((hours<=0)||(hours>=24)){
    this.friday1=true;
    this.friday2=true;
    this.saturday1=true;
    this.saturday2=true;
    console.log('err');
    console.log(fridaystart._d);
    console.log(fridayend._d);
    console.log(saturdaystart._d);
    console.log(saturdayend._d);
  }else{
    this.friday1=false;
    this.friday2=false;
    this.saturday1=false;
    this.saturday2=false;
  }

  duration = moment.duration(saturdaystart1.diff(fridayend1));
  hours = duration.asHours();
  console.log('Diff'+hours);
  if((hours<=0)||(hours>=24)){
    this.friday3=true;
    this.friday4=true;
    this.saturday3=true;
    this.saturday4=true;
    console.log('err');
    console.log(fridaystart1._d);
    console.log(fridayend1._d);
    console.log(saturdaystart1._d);
    console.log(saturdayend1._d);
  }else{
    this.friday3=false;
    this.friday4=false;
    this.saturday3=false;
    this.saturday4=false;
  }

  
  duration = moment.duration(sundaystart.diff(saturdayend));
  hours = duration.asHours();
  console.log('Diff'+hours);
  if((hours<=0)||(hours>=24)){
    this.sunday1=true;
    this.sunday2=true;
    this.saturday1=true;
    this.saturday2=true;
    console.log('err');
    console.log(saturdaystart._d);
    console.log(saturdayend._d);
    console.log(sundaystart._d);
    console.log(sundayend._d);
  }else{
    this.sunday1=false;
    this.sunday2=false;
    this.saturday1=false;
    this.saturday2=false;
  }


  duration = moment.duration(sundaystart1.diff(saturdayend1));
  hours = duration.asHours();
  console.log('Diff'+hours);
  if((hours<=0)||(hours>=24)){
    this.sunday3=true;
    this.sunday4=true;
    this.saturday3=true;
    this.saturday4=true;
    console.log('err');
    console.log(saturdaystart1._d);
    console.log(saturdayend1._d);
    console.log(sundaystart1._d);
    console.log(sundayend1._d);
  }else{
    this.sunday3=false;
    this.sunday4=false;
    this.saturday3=false;
    this.saturday4=false;
  }

  duration = moment.duration(tuesdaystart1.diff(tuesdayend));
  hours = duration.asHours();
  console.log('Diff'+hours);
  if((hours<=0)||(hours>=24)){
      this.tuesday1=true;
      this.tuesday2=true;
      this.tuesday3=true;
      this.tuesday4=true;
    console.log('err');
    console.log(tuesdaystart._d);
    console.log(tuesdayend._d);
    console.log(tuesdaystart1._d);
    console.log(tuesdayend1._d);
  }else{
    this.tuesday1=false;
    this.tuesday2=false;
    this.tuesday3=false;
    this.tuesday4=false;
  }


  duration = moment.duration(wednesdaystart1.diff(wednesdayend));
  hours = duration.asHours();
  console.log('Diff'+hours);
  if((hours<=0)||(hours>=24)){
    this.wednesday1=true;
    this.wednesday2=true;
    this.wednesday3=true;
    this.wednesday4=true;
    console.log('err');
    console.log(wednesdaystart._d);
    console.log(wednesdayend._d);
    console.log(wednesdaystart1._d);
    console.log(wednesdayend1._d);
  }else{
    this.wednesday1=false;
    this.wednesday2=false;
    this.wednesday3=false;
    this.wednesday4=false;
  }


  duration = moment.duration(thursdaystart1.diff(thursdayend));
  hours = duration.asHours();
  console.log('Diff'+hours);
  if((hours<=0)||(hours>=24)){
    this.thursday1=true;
    this.thursday2=true;
    this.thursday3=true;
    this.thursday4=true;
    console.log('err');
    console.log(thursdaystart._d);
    console.log(thursdayend._d);
    console.log(thursdaystart1._d);
    console.log(thursdayend1._d);
  }else{
    this.thursday1=false;
    this.thursday2=false;
    this.thursday3=false;
    this.thursday4=false;
  }


  duration = moment.duration(fridaystart1.diff(fridayend));
  hours = duration.asHours();
  console.log('Diff'+hours);
  if((hours<=0)||(hours>=24)){
    this.friday1=true;
    this.friday2=true;
    this.friday3=true;
    this.friday4=true;
    console.log('err');
    console.log(fridaystart._d);
    console.log(fridayend._d);
    console.log(fridaystart1._d);
    console.log(fridayend1._d);
  }else{
    this.friday1=false;
    this.friday2=false;
    this.friday3=false;
    this.friday4=false;
  }
  

  duration = moment.duration(saturdaystart1.diff(saturdayend));
  hours = duration.asHours();
  console.log('Diff'+hours);
  if((hours<=0)||(hours>=24)){
    this.saturday1=true;
    this.saturday2=true;
    this.saturday3=true;
    this.saturday4=true;
    console.log('err');
    console.log(saturdaystart._d);
    console.log(saturdayend._d);
    console.log(saturdaystart1._d);
    console.log(saturdayend1._d);
  }else{
    this.saturday1=false;
    this.saturday2=false;
    this.saturday3=false;
    this.saturday4=false;
  }


  duration = moment.duration(sundaystart1.diff(sundayend));
  hours = duration.asHours();
  console.log('Diff'+hours);
  if((hours<=0)||(hours>=24)){
    this.sunday1=true;
    this.sunday2=true;
    this.sunday3=true;
    this.sunday4=true;
    console.log('err');
    console.log(sundaystart._d);
    console.log(sundayend._d);
    console.log(sundaystart1._d);
    console.log(sundayend1._d);
  }else{
    this.sunday1=false;
    this.sunday2=false;
    this.sunday3=false;
    this.sunday4=false;
  }
  
}
}

 