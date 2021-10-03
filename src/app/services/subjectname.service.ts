import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectnameService {
  subjectName: string = ""
  constructor() { }
  setValue(subjectName: string) { this.subjectName = subjectName}
  getValue() { return this.subjectName }
}
