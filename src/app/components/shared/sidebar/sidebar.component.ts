import { Component, inject, OnInit } from '@angular/core'

import { ActivatedRoute, Router } from '@angular/router'

import '@ui5/webcomponents-fiori/dist/ShellBar.js'

import '@ui5/webcomponents-icons/dist/request.js'
import '@ui5/webcomponents-icons/dist/activities.js'
import '@ui5/webcomponents-icons/dist/calendar.js'

const ROUTES = [
  {
    path: 'new',
    icon: 'request',
    text: 'Nueva Tarea',
  },
  {
    path: 'list',
    icon: 'activities',
    text: 'Listado',
  },
  {
    path: 'calendar',
    icon: 'calendar',
    text: 'Calendario',
  },
]

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute)
  private router = inject(Router)
  public selectedMenuItem = ''

  constructor() {
    this.activatedRoute.url.subscribe(() => {
      const parts = this.router.url.split('/')
      this.selectedMenuItem = parts[parts.length - 1]
    })
  }
  ngOnInit() {}

  protected readonly ROUTES = ROUTES
}
