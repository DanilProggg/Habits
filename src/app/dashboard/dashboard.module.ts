import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FullCalendarModule } from '@fullcalendar/angular';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HabitsComponent } from './pages/habits/habits.component';
import { TasksAreaComponent } from './components/tasks-area/tasks-area.component';
import { HeaderComponent } from '../ui/header/header.component';
import { TaskComponent } from './components/task/task.component';


@NgModule({
    declarations: [

      HeaderComponent,
      CalendarComponent,
      HabitsComponent,
      TasksAreaComponent,
      TaskComponent
    
  ],
    imports: [
        DashboardRoutingModule,
        FullCalendarModule
    ],
    providers: [],
})
export class DashboardModule { }