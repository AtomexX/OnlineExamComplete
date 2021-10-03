import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreserviceService {
  score: number = 0
  constructor() { }
  setValue(score: number) { this.score = score}
  getValue() { return this.score }

 
}
