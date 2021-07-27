import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroesStartComponent } from './heroes/heroes-start/heroes-start.component';
import { HeroesDetailComponent } from './heroes/heroes-detail/heroes-detail.component';
import { HeroesEditComponent } from './heroes/heroes-edit/heroes-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  {
    path: 'heroes',
    component: HeroesComponent,
    children: [
      { path: '', component: HeroesStartComponent },
      { path: 'new', component: HeroesEditComponent },
      {
        path: ':id',
        component: HeroesDetailComponent,
      },
      {
        path: ':id/edit',
        component: HeroesEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
