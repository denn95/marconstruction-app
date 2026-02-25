import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'bathroom-renovation-long-island', loadComponent: () => import('./pages/bathroom/bathroom').then(m => m.Bathroom) },
  { path: 'kitchen-remodeling-long-island', loadComponent: () => import('./pages/kitchen/kitchen').then(m => m.Kitchen) },
  { path: 'roofing-installation-long-island', loadComponent: () => import('./pages/roofing/roofing').then(m => m.Roofing) },
  { path: 'home', redirectTo: '', pathMatch: 'full' },

  { path: '**', redirectTo: '' }
];
