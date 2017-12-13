import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimePickerComponent } from './time-picker.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

describe('TimePickerComponent', () => {
  let component: TimePickerComponent;
  let fixture: ComponentFixture<TimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ TimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePickerComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('Shift1 form validity', () => {
    expect(component.shift1.valid).toBeTruthy();
  });
  it('Shift2 form validity', () => {
    expect(component.shift2.valid).toBeTruthy();
  });

  let days=['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];


  for(let i=0;i<days.length;i++){

  
  
    it('Shift1 Hour field validity', () => {
      let errors = {};
      let hour =   component.shift1.controls[days[i]].controls[0].controls.startTime.controls[0].controls.hours;
      expect(hour.valid).toBeTruthy();
  
      // Hour field is required
      errors = hour.errors || {};
      expect(errors['required']).toBeFalsy();
  
      // Set hour to something
      hour.setValue(0);
      errors = hour.errors || {};
      expect(errors['required']).toBeFalsy();
  
      // Set hour to something correct
      hour.setValue(5);
      errors = hour.errors || {};
      expect(errors['required']).toBeFalsy();
    });
  
    it('Shift1 Minutes field validity', () => {
      let errors = {};
      let hour =   component.shift1.controls[days[i]].controls[0].controls.startTime.controls[0].controls.minutes;
      expect(hour.valid).toBeTruthy();
  
      // Minutes field is required
      errors = hour.errors || {};
      expect(errors['required']).toBeFalsy();
  
      // Set Minutes to something
      hour.setValue(0);
      errors = hour.errors || {};
      expect(errors['required']).toBeFalsy();
  
      // Set Minutes to something correct
      hour.setValue(5);
      errors = hour.errors || {};
      expect(errors['required']).toBeFalsy();
    });
  
  
    it('Shift1 Season field validity', () => {
      let errors = {};
      let hour =   component.shift1.controls[days[i]].controls[0].controls.startTime.controls[0].controls.seasion;
      expect(hour.valid).toBeTruthy();
  
      
      errors = hour.errors || {};
      expect(errors['required']).toBeFalsy();
  
     
      hour.setValue('as');
      errors = hour.errors || {};
      expect(errors['required']).toBeFalsy();
  
     
      hour.setValue('AM');
      errors = hour.errors || {};
      expect(errors['required']).toBeFalsy();
    });
  

    it('shift2 Hour field validity', () => {
      let errors = {};
      let hour =   component.shift2.controls[days[i]].controls[0].controls.startTime.controls[0].controls.hours;
      expect(hour.valid).toBeTruthy();
  
      // Hour field is required
      errors = hour.errors || {};
      expect(errors['required']).toBeFalsy();
  
      // Set hour to something
      hour.setValue(0);
      errors = hour.errors || {};
      expect(errors['required']).toBeFalsy();
  
      // Set hour to something correct
      hour.setValue(5);
      errors = hour.errors || {};
      expect(errors['required']).toBeFalsy();
    });


    it('shift2 Minutes field validity', () => {
      let errors = {};
      let hour =   component.shift2.controls[days[i]].controls[0].controls.startTime.controls[0].controls.minutes;
      expect(hour.valid).toBeTruthy();
  
      // Minutes field is required
      errors = hour.errors || {};
      expect(errors['required']).toBeFalsy();
  
      // Set Minutes to something
      hour.setValue(0);
      errors = hour.errors || {};
      expect(errors['required']).toBeFalsy();
  
      // Set Minutes to something correct
      hour.setValue(5);
      errors = hour.errors || {};
      expect(errors['required']).toBeFalsy();
    });
  
  
    it('shift2 Season field validity', () => {
      let errors = {};
      let hour =   component.shift2.controls[days[i]].controls[0].controls.startTime.controls[0].controls.seasion;
      expect(hour.valid).toBeTruthy();
  
      
      errors = hour.errors || {};
      expect(errors['required']).toBeFalsy();
  
     
      hour.setValue('as');
      errors = hour.errors || {};
      expect(errors['required']).toBeFalsy();
  
     
      hour.setValue('AM');
      errors = hour.errors || {};
      expect(errors['required']).toBeFalsy();
    });
  }
});
