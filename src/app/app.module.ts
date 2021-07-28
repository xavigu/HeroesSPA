import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesStartComponent } from './heroes/heroes-start/heroes-start.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { HeroesEditComponent } from './heroes/heroes-edit/heroes-edit.component';
import { HeroesDetailComponent } from './heroes/heroes-detail/heroes-detail.component';
import { HeroeItemComponent } from './heroes/heroes-list/heroe-item/heroe-item.component';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroesComponent,
    HeroesStartComponent,
    HeroesListComponent,
    HeroesEditComponent,
    HeroesDetailComponent,
    HeroeItemComponent,
    DropdownDirective,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    DropdownDirective,
    FilterPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
