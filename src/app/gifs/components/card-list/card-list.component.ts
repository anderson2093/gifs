import { Component, Input } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  @Input()
  public gifs:Gif[]=[];

}
