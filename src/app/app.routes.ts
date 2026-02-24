import { Routes } from '@angular/router';
import { App } from '../app/app';
import { Bathroom } from './pages/bathroom/bathroom';
import { Home } from './pages/home/home';
import { Kitchen } from './pages/kitchen/kitchen';

export const routes: Routes = [

  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
{ path: 'bathroom-renovation-nyc', loadComponent: () => import('./pages/bathroom/bathroom').then(m => m.Bathroom) },
{ path: 'kitchen-remodeling-nyc', loadComponent: () => import('./pages/kitchen/kitchen').then(m => m.Kitchen) },
{ path: 'roofing-installation-nyc', loadComponent: () => import('./pages/roofing/roofing').then(m => m.Roofing) },
  { path: 'home', redirectTo: '', pathMatch: 'full' },

  { path: '**', redirectTo: '' }
];
