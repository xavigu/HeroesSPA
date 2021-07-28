import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Heroe } from '../heroe.model';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {
  heroe: Heroe;
  id: number;
  loading: boolean = false;

  constructor(private heroeService: HeroesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.heroe = this.heroeService.getHeroe(this.id);
      }
    );
  }

  onEditHeroe() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['edit'], {relativeTo: this.route});
    }, 1000);
  }

  onDeleteHeroe() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false
      this.heroeService.deleteHeroe(this.id)
      this.router.navigate(['/heroes'], { relativeTo: this.route })
    }, 1000);
  }

}
