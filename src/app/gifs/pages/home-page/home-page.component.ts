import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private gifsService:GifsService){
/*    let listHistory:string=JSON.parse(localStorage.getItem('history')!)[0];
    this.gifsService.searchTag(listHistory)*/
  }

  get gifs():Gif[]{
    return this.gifsService.gifList;
  }
}
