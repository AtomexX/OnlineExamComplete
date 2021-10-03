import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchStudentDto } from 'src/app/admin/view-reports/SearchStudentDto';
import { Observable } from 'rxjs';
import { UserInfoDto } from 'src/app/admin/view-reports/UserInfoDto';
@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class ViewReportsComponent implements OnInit {

  searchStudentDto : SearchStudentDto = new SearchStudentDto();

  studentsInfo:any;


  constructor( private http: HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  subject?: string;
	state?: string;
	city?: string;
	level?: number;
  marks?: number;
  endpoints:string="";

  OnInput1(event:any){
    this.subject=event.target.value;
  }
  OnInput2(event:any){
    this.level=event.target.value;
  }
  OnInput3(event:any){
    this.marks=event.target.value;
  }
  OnInput4(event:any){
    this.state=event.target.value;
  }
  OnInput5(event:any){
    this.city=event.target.value;
  }









  searchStudent(){
    this.searchStudentService(this.searchStudentDto).subscribe(data=>{
      this.studentsInfo = data;
      console.log(this.studentsInfo)
    })

}
//https://localhost:44335/api/SearchStudents?subject=C&state=AP&city=Venkatagiri&level=1&mark=10
searchStudentService(_searchStudentDto : SearchStudentDto):Observable<any>{
  this.endpoints="subject="+this.subject+"&state="+this.state+"&city="+this.city+"&level="+this.level+"&mark="+this.marks;
  let url = ('https://localhost:44335/api/SearchStudents?'+this.endpoints);
  return this.http.get<UserInfoDto[]>(url);
 }

}
