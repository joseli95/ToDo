import { Component, inject, Input, OnInit } from '@angular/core'
import { StorageService } from '../../services/storage.service'

import '@ui5/webcomponents/dist/Table.js'
import '@ui5/webcomponents/dist/TableColumn.js'
import '@ui5/webcomponents/dist/TableRow.js'
import '@ui5/webcomponents/dist/TableCell.js'
import '@ui5/webcomponents/dist/Card.js'
import '@ui5/webcomponents/dist/CardHeader.js'
import { ITask } from '../../interfaces/ITask'
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {
  @Input() lastTask = true
  @Input() title = 'Últimas tareas agregadas'

  private storageService = inject(StorageService)
  private taskService = inject(TaskService)

  tasks: ITask[] = []

  ngOnInit() {
    this.taskService.tasksChanged.subscribe(added => {
      if (added) {
        this.getTasks()
      }
    })

    this.getTasks()
  }

  getTasks() {
    const allTasks = this.storageService.getTasks()

    if (this.lastTask) {
      this.tasks = allTasks.filter(tasks => !tasks.completed).slice(-5)

      this.tasks.reverse()
    } else {
      this.tasks = allTasks
    }
  }
}
