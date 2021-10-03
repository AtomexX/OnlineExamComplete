import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetquestionService } from 'src/app/services/getquestion.service'; 
import { LevelserviceService } from 'src/app/services/levelservice.service';
import { SubjectnameService } from 'src/app/services/subjectname.service';

@Component({
  selector: 'app-select-exam',
  templateUrl: './select-exam.component.html',
  styleUrls: ['./select-exam.component.css']
})
export class SelectExamComponent implements OnInit {
    subjects=[""]
  constructor(public getquestion:GetquestionService, private router: Router, private subjectname:SubjectnameService,private http:HttpClient,private levelservice:LevelserviceService) { }
  subjectSelected(index: number) {
    console.log(index)
    this.router.navigate(['user/exam/start-exam']);
    this.subjectname.setValue(this.subjects[index])
    this.getquestion.getQuestions()
    this.levelservice.setValue(1)
  }
  ngOnInit(): void {
    this.http.get<string[]>("https://localhost:44335/api/Subjects").subscribe((data: string[]) => this.subjects= data);
  }

}
