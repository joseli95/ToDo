import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SystemLayoutComponent } from './layouts/system-layout/system-layout.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'prefix',
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  },
  {
    path: 'system',
    component: SystemLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/system/system.module').then(m => m.SystemModule),
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
