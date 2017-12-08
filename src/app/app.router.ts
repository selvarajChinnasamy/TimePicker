import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TimePickerComponent } from './time-picker/time-picker.component';

export const router: Routes = [
    { path: '', redirectTo: 'time', pathMatch: 'full' },
    { path: 'time', component: TimePickerComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);