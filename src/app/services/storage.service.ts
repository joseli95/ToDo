import { Injectable } from '@angular/core'
import { ITask } from '../interfaces/ITask'

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  saveTask(task: ITask) {
    const tasks = this.getTasks()

    if (tasks !== null) {
      tasks.push(task)

      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }

  getTasks(): ITask[] | null {
    const tasksString = localStorage.getItem('tasks') || ''
    try {
      return JSON.parse(tasksString) || []
    } catch (error) {
      return null
    }
  }
}
