import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { HomePageComponent } from './home/home-page/home-page.component';
//import { ReportComponent } from './home/report/report.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';
//import { UserServiceService } from './services/user-service.service';
import { LevelComponent } from './user/exam/level/level.component';
import { ScoreComponent } from './user/exam/score/score.component';
import { SelectExamComponent } from './user/exam/select-exam/select-exam.component';
import { StartExamComponent } from './user/exam/start-exam/start-exam.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { AddQuestionsComponent } from './admin/add-questions/add-questions.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { ViewReportsComponent } from './admin/view-reports/view-reports.component';
import { RemoveQuestionsComponent } from './admin/remove-questions/remove-questions.component';
import { AddQuestionService } from './services/add-question.service';
import { RemoveQuestionService } from './services/remove-question.service';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { AnswerService } from './services/answer.service';
import { GetquestionService } from './services/getquestion.service';
import { LevelserviceService } from './services/levelservice.service';
import { QuestionsetlevelService } from './services/questionsetlevel.service';
import { QuestionslistService } from './services/questionslist.service';
import { SubjectnameService } from './services/subjectname.service';
import { ResultComponent } from './user/exam/result/result.component';

const appRoutes: Routes = [
  { path:'', component: HomePageComponent },
  { path:'home-page', component: HomePageComponent },
  { path:'about-us', component: AboutUsComponent },
  //{ path:'report-page', component: ReportComponent },
  { path:'user/login', component: UserLoginComponent},
  { path:'user/register', component: UserRegisterComponent},
  { path:'user/exam/select-exam', component: SelectExamComponent},
  { path:'user/exam/start-exam', component: StartExamComponent},
  { path:'user/exam/level', component: LevelComponent},
  { path:'user/exam/score', component: ScoreComponent},
  { path:'user/exam/result', component: ResultComponent},
  { path:'admin/admin-profile', component: AdminProfileComponent },
  { path:'admin/add-questions', component: AddQuestionsComponent },
  { path:'admin/remove-questions', component: RemoveQuestionsComponent },
  { path:'admin/view-reports', component: ViewReportsComponent },
  { path:'admin/admin-login', component: AdminLoginComponent },
 
  ]

@NgModule({
  declarations: [		
    AppComponent,
    HomePageComponent, NavBarComponent, AboutUsComponent,
    //ReportComponent,
    UserLoginComponent, UserRegisterComponent,
    SelectExamComponent, StartExamComponent, ResultComponent, 
    LevelComponent, ScoreComponent, 
    AddQuestionsComponent, AdminProfileComponent,ViewReportsComponent,
    RemoveQuestionsComponent, AdminLoginComponent,
     
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxCaptchaModule
  ],
  providers: [
    //UserServiceService,
    AlertifyService,
    AuthService,
    AddQuestionService, RemoveQuestionService,
    AnswerService,GetquestionService,LevelserviceService,
    QuestionsetlevelService,QuestionslistService, SubjectnameService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
