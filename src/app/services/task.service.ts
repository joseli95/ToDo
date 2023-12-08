import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSubject = new Subject<boolean>()
  tasksChanged = this.tasksSubject.asObservable()

  taskAdded() {
    this.tasksSubject.next(true)
  }
}
