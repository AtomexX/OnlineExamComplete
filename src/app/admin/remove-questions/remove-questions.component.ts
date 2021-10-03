import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-remove-questions',
  templateUrl: './remove-questions.component.html',
  styleUrls: ['./remove-questions.component.css']
})
export class RemoveQuestionsComponent implements OnInit {

  SubjectName:string="";
  Level:number=0;
   end:string="";
  endPoints:string="";
  constructor(private http:HttpClient) { }



  OnInput1(event:any){
    this.SubjectName=event.target.value;
  }
  OnInput2(event:any){
    this.Level=event.target.value;
  }
  ngOnInit(): void {
  }
  onSubmit(data:any)
  {
    this.endPoints="subject_name="+this.SubjectName+"&level="+this.Level;
    this.http.delete('http://localhost:44335/api/QuestionSets?'+this.endPoints,data)
    .subscribe((result:any)=>{
        console.warn("result",result)
      })
    console.warn(data);
  }
}