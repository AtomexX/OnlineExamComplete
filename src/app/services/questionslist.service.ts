import { Injectable } from '@angular/core';
import { IQuestion } from './IQuestion';

@Injectable({
  providedIn: 'root'
})
export class QuestionslistService {

  value: IQuestion[];
  constructor() {this.value=[] }
  setValue(val:IQuestion[])
  {
    this.value=val;
 
  }
  getValue() { return this.value; }
}
