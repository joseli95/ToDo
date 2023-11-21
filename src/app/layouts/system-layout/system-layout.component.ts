import { AfterViewInit, Component } from '@angular/core'

import '@ui5/webcomponents-icons/dist/menu.js'
import '@ui5/webcomponents-icons/dist/sys-find.js'
import '@ui5/webcomponents-icons/dist/log.js'

import '@ui5/webcomponents/dist/Button.js'
import '@ui5/webcomponents/dist/Menu.js'
import '@ui5/webcomponents/dist/MenuItem.js'
import '@ui5/webcomponents/dist/Popover.js'
import '@ui5/webcomponents/dist/Title.js'
import '@ui5/webcomponents/dist/List.js'

@Component({
  selector: 'app-system-layout',
  templateUrl: './system-layout.component.html',
  styleUrls: ['./system-layout.component.css'],
})
export class SystemLayoutComponent implements AfterViewInit {
  isMobile = false

  ngAfterViewInit() {
    const sidenav = document.querySelector('ui5-side-navigation')
    const toggleButton = document.getElementById('toggle')

    if (sidenav && toggleButton) {
      toggleButton.addEventListener('click', () => {
        sidenav.toggleAttribute('collapsed')
      })

      if (this.isMobile) {
        sidenav.setAttribute('collapsed', '')
      }
    }

    const shellbar = document.getElementById('shellbar-1')
    const actionPopover = document.getElementById('action-popover-1')

    if (shellbar && actionPopover) {
      shellbar.addEventListener('ui5-profile-click', event => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        actionPopover.showAt(event.detail.targetRef)
      })
    }
  }
}
