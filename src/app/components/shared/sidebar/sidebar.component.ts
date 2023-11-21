import { Component, inject, OnInit } from '@angular/core'

import { ActivatedRoute, Router } from '@angular/router'

import '@ui5/webcomponents-fiori/dist/ShellBar.js'

import '@ui5/webcomponents-icons/dist/home.js'
import '@ui5/webcomponents-icons/dist/list.js'

const ROUTES = [
  {
    path: 'new',
    icon: 'home',
    text: 'Nuevo',
  },
  {
    path: 'list',
    icon: 'list',
    text: 'Listado',
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
