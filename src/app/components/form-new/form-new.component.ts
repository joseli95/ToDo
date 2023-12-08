import { Component, inject } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'

import '@ui5/webcomponents/dist/Button.js'
import '@ui5/webcomponents/dist/Input.js'
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js'
import '@ui5/webcomponents/dist/Label.js'
import '@ui5/webcomponents/dist/Card.js'
import '@ui5/webcomponents/dist/CardHeader.js'
import '@ui5/webcomponents/dist/DatePicker.js'
import '@ui5/webcomponents/dist/MessageStrip.js'
import { StorageService } from '../../services/storage.service'
import { ITask } from '../../interfaces/ITask'

@Component({
  selector: 'app-form-new',
  templateUrl: './form-new.component.html',
  styleUrls: ['./form-new.component.css'],
})
export class FormNewComponent {
  private formBuilder = inject(FormBuilder)

  private storageService = inject(StorageService)

  showErrorMessage = false
  errorMessage = ''

  formNewTask = this.formBuilder.group({
    task: ['', Validators.required],
    date: ['', Validators.required],
  })

  saveTask() {
    if (this.formNewTask.valid) {
      const task: ITask = {
        id: this.generateUniqueId(),
        task: this.formNewTask.controls.task.value ?? '',
        date: this.formNewTask.controls.date.value ?? '',
        completed: false,
      }

      this.storageService.saveTask(task)
      this.formNewTask.controls.task.setValue('')
      this.formNewTask.controls.date.setValue('')
    } else {
      this.showErrorMessage = true
      this.errorMessage = 'Debes completar todos los campos'

      setTimeout(() => {
        this.showErrorMessage = false
      }, 3500)
    }
  }

  private generateUniqueId(): number {
    return Date.now()
  }
}
