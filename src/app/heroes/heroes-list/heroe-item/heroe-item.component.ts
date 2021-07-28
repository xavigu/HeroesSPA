import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../heroe.model';

@Component({
  selector: 'app-heroe-item',
  templateUrl: './heroe-item.component.html',
  styleUrls: ['./heroe-item.component.css']
})
export class HeroeItemComponent implements OnInit {
  @Input() heroe: Heroe;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
