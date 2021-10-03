import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserForRegister } from 'src/app/model/user';

import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm: FormGroup;
  user: UserForRegister;
  userSubmitted: boolean;
  
  constructor(private fb: FormBuilder, 
    private authService: AuthService,
    private alertify: AlertifyService 
    ) {}

  ngOnInit() {
   this.createRegistrationForm(); 
  }
  
  createRegistrationForm(){
    this.registerationForm= this.fb.group({
      userName: [null,Validators.required],
      email:[null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      mobile: [null, [Validators.required, Validators.minLength(10)]],
      city: [null,Validators.required],
      state: [null,Validators.required],
      dob: [null,Validators.required],
      qualification: [null,Validators.required],
      yearOfCompletion: [null,Validators.required],
      
    });
    
  }
  userData():UserForRegister{
    return this.user = {
      userName: this.userName.value,
      email:this.email.value,
      mobile: this.mobile.value,
      password:this.password.value,
      city:this.city.value,
      state:this.state.value,
      dob:this.dob.value,
      qualification:this.qualification.value,
      yearOfCompletion:this.yearOfCompletion.value
     
    }
  }


  get userName(){
    return this.registerationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registerationForm.get('email') as FormControl;
  }
  get password(){
    return this.registerationForm.get('password') as FormControl;
  }
  get mobile(){
    return this.registerationForm.get('mobile') as FormControl;
  }
  
  get city(){
    return this.registerationForm.get('city') as FormControl;
  }
  
  get state(){
    return this.registerationForm.get('state') as FormControl;
  }
  
  get dob(){
    return this.registerationForm.get('dob') as FormControl;
  }
  
  get qualification(){
    return this.registerationForm.get('qualification') as FormControl;
  }
  
  get yearOfCompletion(){
    return this.registerationForm.get('yearOfCompletion') as FormControl;
  }

  onSubmit(){
    this.userSubmitted=true;
    if(this.registerationForm.valid){
      console.log(this.registerationForm.value);
      //this.user = Object.assign(this.user, this.registerationForm.value);
      this.authService.registerUser(this.userData()).subscribe(() => 
      {
        this.alertify.success("Resistered Sussfully");
        
      }, error => {
        this.alertify.error(error.error)  
      }
      );
      this.registerationForm.reset();
      this.alertify.success("Resistered Successfully");
      this.userSubmitted=false;
    }
    
  }
  
}
