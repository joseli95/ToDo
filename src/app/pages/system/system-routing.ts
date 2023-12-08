import { Routes } from '@angular/router'
import { NewTaskComponent } from './new-task/new-task.component'
import { TasksComponent } from './tasks/tasks.component'
import { CalendarComponent } from './calendar/calendar.component'

export const SystemRouting: Routes = [
  {
    path: 'new',
    component: NewTaskComponent,
  },
  {
    path: 'tasks',
    component: TasksComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },
]
