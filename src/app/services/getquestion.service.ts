import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IQuestion } from './IQuestion';
import { LevelserviceService } from './levelservice.service';
import { QuestionslistService } from './questionslist.service';
import { SubjectnameService } from './subjectname.service';

@Injectable({
  providedIn: 'root'
})
export class GetquestionService {

  questions: IQuestion[] = [];
  url:string=""
  
 constructor(private http: HttpClient, private questionList:QuestionslistService,private subjectname:SubjectnameService
  ,private level:LevelserviceService) { }
  getQuestions()
  {   
    this.url=`https://localhost:44335/api/Exam/GetExamQuestion/${this.subjectname.getValue()}/${this.level.getValue()}`
    console.log(this.url)
    return this.http.get<IQuestion[]>(this.url)

    
    
    
  } 
    
}  
    

