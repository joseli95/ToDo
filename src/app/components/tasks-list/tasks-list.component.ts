import { Component, inject, OnInit } from '@angular/core'
import { StorageService } from '../../services/storage.service'

import '@ui5/webcomponents/dist/Table.js'
import '@ui5/webcomponents/dist/TableColumn.js'
import '@ui5/webcomponents/dist/TableRow.js'
import '@ui5/webcomponents/dist/TableCell.js'
import '@ui5/webcomponents/dist/Card.js'
import '@ui5/webcomponents/dist/CardHeader.js'
import { ITask } from '../../interfaces/ITask'

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {
  private storageService = inject(StorageService)

  tasks: ITask[] = []

  ngOnInit() {
    const allTasks = this.storageService.getTasks()

    this.tasks = allTasks.filter(tasks => !tasks.completed).slice(-5)

    this.tasks.reverse()
  }
}
