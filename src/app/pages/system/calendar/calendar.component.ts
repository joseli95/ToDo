import { Component, inject, OnInit } from '@angular/core'
import { CalendarOptions, EventSourceInput } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import { StorageService } from '../../../services/storage.service'

import '@ui5/webcomponents/dist/Card.js'
import '@ui5/webcomponents/dist/CardHeader.js'
import '@ui5/webcomponents/dist/Label.js'
import { CurrencyPipe } from '@angular/common'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  private storageService = inject(StorageService)

  private currencyPipe = inject(CurrencyPipe)

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    plugins: [dayGridPlugin, timeGridPlugin],
    locale: 'es',
    buttonText: {
      today: 'Hoy',
      month: 'Mes',
      week: 'Semana',
      day: 'Día',
    },
    height: '550px',
  }

  ngOnInit() {
    const tasks = this.storageService.getTasks()
    const events: EventSourceInput = []

    tasks.forEach(task => {
      const solitDate = task.date.split('/')

      events.push({
        date: `${solitDate[2]}-${solitDate[1]}-${solitDate[0]}`,
        title: task.task,
      })
    })

    this.calendarOptions.events = events
  }
}
