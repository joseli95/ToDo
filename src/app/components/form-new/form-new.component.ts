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

@Component({
  selector: 'app-form-new',
  templateUrl: './form-new.component.html',
  styleUrls: ['./form-new.component.css'],
})
export class FormNewComponent {
  private formBuilder = inject(FormBuilder)

  showErrorMessage = false
  errorMessage = ''

  formNewTask = this.formBuilder.group({
    task: ['', Validators.required],
    date: ['', Validators.required],
  })

  saveTask() {
    if (this.formNewTask.valid) {
    } else {
      this.showErrorMessage = true
      this.errorMessage = 'Debes completar todos los campos'

      setTimeout(() => {
        this.showErrorMessage = false
      }, 3500)
    }
  }
}
