import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Heroe } from '../heroe.model';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  subscription: Subscription
  heroes: Heroe[];
  heroeName = '';

  constructor(private heroeService: HeroesService,
    private router: Router,
    private route: ActivatedRoute) { }

    ngOnInit() {
      this.subscription = this.heroeService.heroesChanged.subscribe(
          (heroes: Heroe[]) => {
            this.heroes = heroes
          }
        )  
      this.heroes = this.heroeService.getHeroes();
    }
  
    onNewHeroe() {
      this.router.navigate(['new'], {relativeTo: this.route});
    }
  
    ngOnDestroy(): void {
      this.subscription.unsubscribe()
    }

}
