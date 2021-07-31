import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeroesDetailComponent } from "./heroes-detail/heroes-detail.component";
import { HeroesEditComponent } from "./heroes-edit/heroes-edit.component";
import { HeroesStartComponent } from "./heroes-start/heroes-start.component";
import { HeroesComponent } from "./heroes.component";

const routes: Routes = [
  {
    path: '',
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
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule{}