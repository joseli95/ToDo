import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { SystemRouting } from './system-routing'

@NgModule({
  imports: [RouterModule.forChild(SystemRouting)],
  declarations: [],
})
export class SystemModule {}
