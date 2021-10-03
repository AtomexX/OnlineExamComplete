import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LevelserviceService {

  levelNum: number = 1
  constructor() { }
  setValue(levelNum: number) { this.levelNum = levelNum}
  getValue() { return this.levelNum }
}
