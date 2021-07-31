import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { SharedModule } from '../shared/shared.module';

import { HeroesComponent } from './heroes.component';
import { HeroesStartComponent } from './heroes-start/heroes-start.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroesEditComponent } from './heroes-edit/heroes-edit.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import { HeroeItemComponent } from './heroes-list/heroe-item/heroe-item.component';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroesStartComponent,
    HeroesListComponent,
    HeroesEditComponent,
    HeroesDetailComponent,
    HeroeItemComponent
  ],
  imports: [ 
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HeroesRoutingModule
   ],
  providers: []
})
export class HeroesModule {}