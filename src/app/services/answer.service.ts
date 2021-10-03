import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  answer: string = "          "
  constructor() { }
  setValue(answer: string) { this.answer = answer}
  getValue() { return this.answer }

  changeValue(position:number,ans:string){
   // if(position == 1) { this.answer = ans + this.answer.substring(1, this.answer.length)}
   // else{
   this.answer= this.answer.substring(0,position-1)+ans+this.answer.substring(position+1,this.answer.length)
   // }
  }
}
