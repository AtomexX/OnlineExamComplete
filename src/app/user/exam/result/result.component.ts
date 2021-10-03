import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LevelserviceService } from 'src/app/services/levelservice.service';
import { ScoreserviceService } from 'src/app/services/scoreservice.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  marks=0
  pass=false
  levelNum=0
  proceed=false
  constructor(private score:ScoreserviceService,private level:LevelserviceService,private router:Router) { }

  ngOnInit(): void {
    this.marks=this.score.getValue()
    console.log("marks",this.marks)
    this.levelNum=this.level.getValue()

    if(this.marks>60){
      this.pass=true

    }
    if (this.pass && this.levelNum <3){
      this.proceed=true
    } 
  }
  
  nextButton(){
    this.level.setValue(this.levelNum+1)
    this.router.navigate(['user/exam/level']);
  }

  finishButton(){
    this.router.navigate(['user/exam/select-exam']);
  }

}
