import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent {
  changmon1 = false;
  mon = false;
  mon1 = false;
  mon2 = false;
  monn = false;
  monn1 = false;
  monn2 = false;
  rForm: FormGroup;
  timemon = { hour: 13, minute: 30 };
  timemon1 = { hour: 13, minute: 30 };
  timetue = { hour: 13, minute: 30 };
  timetue1 = { hour: 13, minute: 30 };
  timewed = { hour: 13, minute: 30 };
  timewed1 = { hour: 13, minute: 30 };
  timeth = { hour: 13, minute: 30 };
  timeth1 = { hour: 13, minute: 30 };
  timefr = { hour: 13, minute: 30 };
  timefr1 = { hour: 13, minute: 30 };
  timesa = { hour: 13, minute: 30 };
  timesa1 = { hour: 13, minute: 30 };
  timesu = { hour: 13, minute: 30 };
  timesu1 = { hour: 13, minute: 30 };
  changemon() {
    this.changmon1 = !this.changmon1;
  }
  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'monday': [null, Validators.required],
      'monday1': [null, Validators.required],
      'monday2': [null, Validators.required],
      'mondayy': [null, Validators.required],
      'mondayy1': [null, Validators.required],
      'mondayy2': [null, Validators.required],
    });
  }
  onFocus() {
    this.mon = true;
    this.mon1 = false;
    this.mon2 = false;
  }
  onFocus1() {
    this.mon = false;
    this.mon1 = true;
    this.mon2 = false;
  }
  onFocus2() {
    this.mon = false;
    this.mon1 = false;
    this.mon2 = true;
  }
  onFocuss() {
    this.monn = true;
    this.monn1 = false;
    this.monn2 = false;
  }
  onFocuss1() {
    this.monn = false;
    this.monn1 = true;
    this.monn2 = false;
  }
  onFocuss2() {
    this.monn = false;
    this.monn1 = false;
    this.monn2 = true;
  }

  increment() {
    if (this.mon == true) {
      if (this.rForm.controls['monday'].value =='') {
        let num = 0;
      } else {
        let num = parseInt(this.rForm.controls['monday'].value);
      }
      num = num + 1;
      console.log(num);
      this.rForm.controls['monday'].setValue(num);
    } else if (this.mon1 == true) {
      if (this.rForm.controls['monday1'].value == null) {
        let num = 0;
      } else {
        let num = parseInt(this.rForm.controls['monday1'].value);
      }
      num = num + 1;
      console.log(num);
      this.rForm.controls['monday1'].setValue(num);
    } else if (this.mon2 == true) {
      if(this.rForm.controls['monday2'].value =='AM')
      {
        this.rForm.controls['monday2'].setValue('PM');
      }else{
        this.rForm.controls['monday2'].setValue('AM');
      }
  }
}
  decrement() {
    console.log('called');
    if (this.mon == true) {
      if (this.rForm.controls['monday'].value == null) {
        let num = 0;
      } else {
        let num = parseInt(this.rForm.controls['monday'].value);
      }
      num = num - 1;
      console.log(num);
      this.rForm.controls['monday'].setValue(num);
    } else if (this.mon1 == true) {
      if (this.rForm.controls['monday1'].value == null) {
        let num = 0;
      } else {
        let num = parseInt(this.rForm.controls['monday1'].value);
      }
      num = num - 1;
      console.log(num);
      this.rForm.controls['monday1'].setValue(num);
    } else if (this.mon2 == true) {
      if(this.rForm.controls['monday2'].value =='AM')
      {
        this.rForm.controls['monday2'].setValue('PM');
      }else{
        this.rForm.controls['monday2'].setValue('AM');
      }
  }
}
increment1() {
  if (this.monn == true) {
    if (this.rForm.controls['mondayy'].value == null) {
      let num = 0;
    } else {
      let num = parseInt(this.rForm.controls['mondayy'].value);
    }
    num = num + 1;
    console.log(num);
    this.rForm.controls['mondayy'].setValue(num);
  } else if (this.monn1 == true) {
    if (this.rForm.controls['mondayy1'].value == null) {
      let num = 0;
    } else {
      let num = parseInt(this.rForm.controls['mondayy1'].value);
    }
    num = num + 1;
    console.log(num);
    this.rForm.controls['mondayy1'].setValue(num);
  } else if (this.monn2 == true) {
    if(this.rForm.controls['mondayy2'].value =='AM')
    {
      this.rForm.controls['mondayy2'].setValue('PM');
    }else{
      this.rForm.controls['mondayy2'].setValue('AM');
    }
}
}
decrement1() {
  console.log('called');
  if (this.monn == true) {
    if (this.rForm.controls['mondayy'].value == null) {
      let num = 0;
    } else {
      let num = parseInt(this.rForm.controls['mondayy'].value);
    }
    num = num - 1;
    console.log(num);
    this.rForm.controls['mondayy'].setValue(num);
  } else if (this.monn1 == true) {
    if (this.rForm.controls['mondayy1'].value == null) {
      let num = 0;
    } else {
      let num = parseInt(this.rForm.controls['mondayy1'].value);
    }
    num = num - 1;
    console.log(num);
    this.rForm.controls['mondayy1'].setValue(num);
  } else if (this.monn2 == true) {
    if(this.rForm.controls['mondayy2'].value =='AM')
    {
      this.rForm.controls['mondayy2'].setValue('PM');
    }else{
      this.rForm.controls['mondayy2'].setValue('AM');
    }
}
}
}
