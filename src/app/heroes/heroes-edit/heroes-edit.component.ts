import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-heroes-edit',
  templateUrl: './heroes-edit.component.html',
  styleUrls: ['./heroes-edit.component.css']
})
export class HeroesEditComponent implements OnInit {
  id: number
  editMode = false
  groupForm: FormGroup

  constructor(
    private route: ActivatedRoute,
    private heroeService: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id
      this.editMode = params.id != null
      this.initForm()
    })
  }

  onSubmit() {
    if (this.editMode) {
      this.heroeService.updateHeroe(this.id, this.groupForm.value)
    } else {
      this.heroeService.addHeroe(this.groupForm.value)
    }
    this.goBack()
  }

  goBack() {
    this.router.navigate(['../'], { relativeTo: this.route })
  }

  private initForm() {
    let heroeName = ''
    let heroeImagePath = ''
    let heroeDescription = ''
    if (this.editMode) {
      const heroe = this.heroeService.getHeroe(this.id)
      heroeName = heroe.name
      heroeImagePath = heroe.imagePath
      heroeDescription = heroe.description
    }
    this.groupForm = new FormGroup({
      name: new FormControl(heroeName, Validators.required),
      imagePath: new FormControl(heroeImagePath, Validators.required),
      description: new FormControl(heroeDescription, Validators.required),
    })
  }
}
