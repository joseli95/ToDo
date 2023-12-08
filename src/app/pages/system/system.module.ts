import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { SystemRouting } from './system-routing'
import { NewTaskComponent } from './new-task/new-task.component'
import { FormNewComponent } from '../../components/form-new/form-new.component'
import { TasksListComponent } from '../../components/tasks-list/tasks-list.component'
import { Ui5WebcomponentsModule } from '@ui5/webcomponents-ngx'
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

@NgModule({
  imports: [
    RouterModule.forChild(SystemRouting),
    Ui5WebcomponentsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [NewTaskComponent, FormNewComponent, TasksListComponent],
})
export class SystemModule {}
