import { Component } from '@angular/core';


import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    buttonText:{
      today:'Сегодня',
    },
    plugins: [dayGridPlugin, interactionPlugin],
    locale:'ru',
    editable: true,
    droppable: true
  };


  //Создание Event-ов
   createEvent(arg: any) { // необходимо явно указать тип данных any для корректной работы
    alert('date click! ' + arg.dateStr);
  }
}
