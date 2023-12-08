import { Routes } from '@angular/router'
import { NewTaskComponent } from './new-task/new-task.component'

export const SystemRouting: Routes = [
  {
    path: 'new',
    component: NewTaskComponent,
  },
]
