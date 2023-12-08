import { inject, Injectable } from '@angular/core'
import { ITask } from '../interfaces/ITask'
import { TaskService } from './task.service'

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private taskService = inject(TaskService)

  saveTask(task: ITask) {
    const tasks = this.getTasks()
    tasks.push(task)

    localStorage.setItem('tasks', JSON.stringify(tasks))
    this.taskService.taskAdded()
  }

  markAsCompleted(id: number) {
    const tasks = this.getTasks()

    const taskIndex = tasks.findIndex(task => task.id === id)
    if (taskIndex !== -1) {
      tasks[taskIndex].completed = true
      localStorage.setItem('tasks', JSON.stringify(tasks))
      this.taskService.taskAdded()
    }
  }

  getTasks(): ITask[] {
    const tasksString = localStorage.getItem('tasks') || ''
    try {
      return JSON.parse(tasksString) || []
    } catch (error) {
      return []
    }
  }
}
