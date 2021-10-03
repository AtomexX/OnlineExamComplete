import { Component,Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit  {

  endPointsSub:string="";
  SubNameAlone:string="";
  Question:string="";
  Option1:string="";
  Option2:string="";
  Option3:string="";
  Option4:string="";
  CorrectAnswer:string="";
  SubjectName:string="";
  Level:string="";
  endPoints:string="";
  endPointsLevel:string="";

  constructor(private http:HttpClient,
              private alertify: AlertifyService,) { }

  OnInputSub(event:any){
    this.SubNameAlone=event.target.value;
  }

  OnInput1(event:any){
    this.Question=event.target.value;
  }
  OnInput2(event:any){
    this.Option1=event.target.value;
  }
  OnInput3(event:any){
    this.Option2=event.target.value;
  }
  OnInput4(event:any){
    this.Option3=event.target.value;
  }
  OnInput5(event:any){
    this.Option4=event.target.value;
  }
  OnInput6(event:any){
    this.CorrectAnswer=event.target.value;
  }
  OnInput7(event:any){
    this.SubjectName=event.target.value;
  }
  OnInput8(event:any){
    this.Level=event.target.value;
  }



  ngOnInit(): void {}
  onSubmitSub(data:any){
  this.endPointsSub="subject_name="+this.SubjectName;
  this.http.post('http://localhost:44335/api/Subjects?'+this.endPointsSub,data)
  .subscribe((result:any)=>{
    console.warn("result",result)
  })
console.warn(data);
  }

  onSubmitLevel(data:any){
    this.endPointsLevel="subject_name="+this.SubjectName+"&level="+this.Level;
    this.http.post('http://localhost:44335/api/QuestionSets?'+this.endPointsLevel,data)
    .subscribe((result:any)=>{
      console.warn("result",result)
    })
  console.warn(data);
    }

  onSubmit(data:any)
  {
    this.endPoints= "question_description="+this.Question+"&option1="+this.Option1+"&option2="+this.Option2+"&option3="+this.Option3+"&option4="+this.Option4+"&correct_option="+this.CorrectAnswer+"&subject_name="+this.SubjectName+"&level="+this.Level;
    this.http.post('https://localhost:44335/api/AddQuestions?'+this.endPoints,data)
    .subscribe((result:any)=>{
        console.warn("result",result)
      })
    console.warn(data);
    this.alertify.success('Question Added Succesfully');
//https://localhost:44335/api/AddQuestions?question_description=C%20level%201%3F&option1=a&option2=b&option3=c&option4=d&correct_option=a&subject_name=C&level=1

  }



}
