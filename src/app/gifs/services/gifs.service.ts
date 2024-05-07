import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gif.interfaces';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  public gifList:Gif[]=[];

  private _tagsHistory: string[]=[];
  private apikey: string = 'DqLdiBoNMpsXbhkCNDoczLgNxqM2LH1B';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  constructor(private http:HttpClient) {
    this.loadLocalStorage();
   }

  get tagsHistory(){
    return [...this._tagsHistory]
  }

  private organizeHistory(tag:string){
    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory=this._tagsHistory.filter((oldTag)=>oldTag!==tag)
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory=this.tagsHistory.splice(0,10);
    this.saveLocalStorage();
 }

 private saveLocalStorage():void{
  localStorage.setItem('history',JSON.stringify(this._tagsHistory));
 }

 private loadLocalStorage():void{
  if(!localStorage.getItem('history'))return;
  this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
  if(this._tagsHistory.length==0)return;
  this.searchTag(JSON.parse(localStorage.getItem('history')!)[0])
 }

  searchTag(tag: string):void{
    if(tag.length === 0)return;
    console.log(tag);
    const params = new HttpParams()
    .set('api_key',this.apikey)
    .set('limit',10)
    .set('q',tag)
    this.organizeHistory(tag);

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
    .subscribe(res=>{
        this.gifList = res.data;
/*        console.log({gifs: this.gifList})
*/
      })
  }
}
