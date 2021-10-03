import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerService } from 'src/app/services/answer.service';
import { GetquestionService } from 'src/app/services/getquestion.service';
import { IQuestion } from 'src/app/services/IQuestion';
import { LevelserviceService } from 'src/app/services/levelservice.service';
import { ScoreserviceService } from 'src/app/services/scoreservice.service';
import { SubjectnameService } from 'src/app/services/subjectname.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  questions:IQuestion[]=[]

  question_number=0
  total_questions=0
  lastElementReached=false
  level: number=0;
  answer_selected=" "
  radioAStatus=false
  radioBStatus=false
  radioCStatus=false
  radioDStatus=false
  url=""
  loggedInUser: string;
  
  selectRadio(value:string) {
    if(value=="a") {
    this.radioAStatus = true;
    this.radioBStatus = false;
    this.radioCStatus = false;
    this.radioDStatus = false;
    }
    else if (value=="b") {
    this.radioAStatus = false;
    this.radioBStatus = true;
    this.radioCStatus = false;
    this.radioDStatus = false;
    }
    else if (value=="c") {
    this.radioAStatus = false;
    this.radioBStatus = false;
    this.radioCStatus = true;
    this.radioDStatus = false;
    }
    else if (value=="d") {
    this.radioAStatus = false;
    this.radioBStatus = false;
    this.radioCStatus = false;
    this.radioDStatus = true;
    }
    else {
    this.radioAStatus = false;
    this.radioBStatus = false;
    this.radioCStatus = false;
    this.radioDStatus = false;
}
}
    
  constructor(public getquestion:GetquestionService, private router: Router,private levelservice:LevelserviceService,private answerservice:AnswerService,private subjectservice:SubjectnameService
    ,private http:HttpClient, private score:ScoreserviceService) { }

  nextButton(){
    this.answerservice.changeValue(this.question_number+1,this.answer_selected)
    console.log(this.answerservice.getValue())
    if (this.question_number < this.total_questions-1){
      this.question_number++; 
      this.selectRadio(" ")
    }
    else {
      this.lastElementReached=true
    }
    
  }
  answerChanged(value: string) { 
    this.selectRadio(value)
    console.log("Answer is:", value );
    this.answer_selected=value
    console.log("Answer a",this.radioAStatus)
   }

  ngOnInit(): void {
    console.log("level ngOnInit")
    this.getquestion.getQuestions()
    .subscribe((data: IQuestion[]) => this.questions= data);
    this.total_questions=10
    this.level=this.levelservice.getValue()

  }

  finishClicked(){
    /*const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    let body = new URLSearchParams();
     body.append('email', "anmi@gmail.com");
     body.append('subject_name', this.subjectservice.getValue());
     body.append('level',  this.levelservice.getValue().toString());
      body.append('selectedAnswers', this.answerservice.getValue());
    console.log(body)
    this.http.post('https://localhost:44335/api/Exam', body, {
        headers: myheader,
      })
      .subscribe(data => {
        console.log(data)
  }, error => {
      console.log(error);
  });*/
  /*this.url=`https://localhost:44335/api/Report?email=anamika%40gmai.com&subject_name=Sql&level=1&marks=66`
    console.log(this.url)
    this.http.get<IQuestion[]>(this.url)
  
    .subscribe((data: IQuestion[]) => this.questions= data);*/
    /*const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
let body = new HttpParams();
body = body.set('email', 'anmi@gmail.com');
body = body.set('subject_name', this.subjectservice.getValue());
body = body.set('level', this.levelservice.getValue().toString());
body = body.set('selectedAnswers', this.answerservice.getValue());

var data_body = {'email': 'anmi@gmail.com', 'subject_name': this.subjectservice.getValue(),
'level': this.levelservice.getValue().toString(), 'selectedAnswers': this.answerservice.getValue()};
console.log(data_body)
this.http.post('https://localhost:44335/api/Exam', JSON.stringify(data_body), {
    headers: myheader,
 }).subscribe(data => {
  console.log(data
  )}, error => {
      console.log(error.json());
  });*/
  this.loggedInUser = localStorage.getItem('token');
  var data_body = {'email': this.loggedInUser, 'subject_name': this.subjectservice.getValue(),
'level': this.levelservice.getValue().toString(), 'selectedAnswers': this.answerservice.getValue()};

const headers = new HttpHeaders().set('Content-Type','application/json');

this.http.post('https://localhost:44335/api/Exam', JSON.stringify(data_body), {headers:headers})
.subscribe(data => {
  console.log(data)
  console.log(Number(JSON.stringify(data)))
  this.score.setValue(Number(JSON.stringify(data))*10)
  this.router.navigate(['user/exam/result']);
});

   
    
  }

}
