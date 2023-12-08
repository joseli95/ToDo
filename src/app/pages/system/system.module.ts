import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { SystemRouting } from './system-routing'
import { NewTaskComponent } from './new-task/new-task.component'
import { FormNewComponent } from '../../components/form-new/form-new.component'
import { TasksListComponent } from '../../components/tasks-list/tasks-list.component'
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx'
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule, CurrencyPipe } from '@angular/common'
import { TasksComponent } from './tasks/tasks.component'
import { StatusPipe } from '../../pipes/status.pipe'
import { CalendarComponent } from './calendar/calendar.component'
import { FullCalendarModule } from '@fullcalendar/angular'

@NgModule({
  imports: [
    RouterModule.forChild(SystemRouting),
    Ui5WebcomponentsModule,
    ReactiveFormsModule,
    CommonModule,
    FullCalendarModule,
  ],
  declarations: [
    NewTaskComponent,
    FormNewComponent,
    TasksListComponent,
    TasksListComponent,
    TasksComponent,
    StatusPipe,
    CalendarComponent,
  ],
  providers: [CurrencyPipe],
})
export class SystemModule {}
