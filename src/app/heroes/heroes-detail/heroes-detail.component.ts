import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Heroe } from '../heroe.model';
import { HeroesService } from '../heroes.service';
import { DialogPopupComponent } from 'src/app/shared/dialog-popup/dialog-popup.component';

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
    private router: Router,
    public dialog: MatDialog) { }

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

  openDeleteDialog(){
    let dialogRef = this.dialog.open(DialogPopupComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.onDeleteHeroe();
      }
    })
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
