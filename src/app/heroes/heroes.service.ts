import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Heroe } from './heroe.model';
import heroesData from '../../assets/mocks/heroes.json';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroesChanged = new Subject<Heroe[]>()
  private heroes: Heroe[] = [];

  constructor() { 
    this.initHeroes();
  }

  initHeroes(){
    if (localStorage.getItem('heroes') === null) {
      this.heroes = heroesData;
    } else {
      this.heroes = JSON.parse(localStorage.getItem('heroes'));
    }
  }

  getHeroes() {
    return this.heroes.slice();
  }

  getHeroe(index: number) {
    return this.heroes[index];
  }

  addHeroe(heroe: Heroe) {
    this.heroes.push(heroe);
    localStorage.setItem('heroes', JSON.stringify(this.heroes));
    this.heroesChanged.next(this.heroes.slice());
  }

  updateHeroe(index: number, newHeroe: Heroe) {
    this.heroes[index] = newHeroe;
    localStorage.setItem('heroes', JSON.stringify(this.heroes));
    this.heroesChanged.next(this.heroes.slice());
  }

  deleteHeroe(index: number) {
    this.heroes.splice(index, 1);
    localStorage.setItem('heroes', JSON.stringify(this.heroes));
    this.heroesChanged.next(this.heroes.slice());
  }
}