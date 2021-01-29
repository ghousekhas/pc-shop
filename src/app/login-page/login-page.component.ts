import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule,Validators,FormBuilder } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import Axios from 'axios';
import {config} from '../../config';
import jsontoformdata from '@ajoelp/json-to-formdata';
import {AuthService} from '../auth.service'
import User from '../models/user.model';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  login= false;
  @ViewChild('myMainContainer') container!: ElementRef;
  @ViewChild('rName') rName!: ElementRef;
  @ViewChild('rEmail') rEmail!: ElementRef;
  @ViewChild('rPassword') rPassword!: ElementRef;
  @ViewChild('dialog') dialog!: ElementRef;
  @ViewChild('matDialog') matDialog!: ElementRef;
  public dialogMessage: string = ' ';


  constructor(private route: ActivatedRoute,private router: Router,private formBuilder: FormBuilder,public authService: AuthService) { 
    
  }

  get f(){
    return this.loginForm.controls;
  }

  async tryRegister(): Promise<boolean>{
    var email = this.rEmail.nativeElement.value;
    var password = this.rPassword.nativeElement.value;
    var name = this.rName.nativeElement.value;
    this.matDialog.nativeElement.open();
    this.authService.register(email, password, name).then((result)=>{
      this.dialogMessage = "bleh";
    });


    return false;
    // var formData = new FormData();
    // var email = this.rEmail.nativeElement.value;
    // var password = this.rPassword.nativeElement.value;
    // var name = this.rName.nativeElement.value;
    // formData.append('action','register');
    // formData.append('email',email);
    // formData.append('password',password);
    // formData.append('first_name',name);
    // formData.append('last_name',name);
    // formData.append('middle_name',name);
    // try{
    //   var result = await Axios.post(config.base_url+ 'accounts/register',formData);
    //   var data = result.data;
    //   console.log(data);
    //   if(data.status === 'success'){
    //     console.log('success');
    //     localStorage.setItem('userId',data.user_id);
    //   }
    // }
    // catch(error){
    //   alert('We had some error');
    //   console.log(error);
    //   return false;
    // }
    // console.log(this.rEmail.nativeElement.value);
    
    // return false;
  }

  closeModal() {
    var dialogBox: HTMLDialogElement = this.dialog.nativeElement;
    dialogBox.close();
    console.log('closing dialog');
  }

  async tryLogin() {
    // this.authService.login(this.f.username.value,this.f.password.value);
    

    
    // return true;


    var formData = new FormData();
    formData.append('jayson',JSON.stringify({
      email: this.f.username.value,
      password: this.f.password.value
    }));
    formData.append('email',this.f.username.value);
    formData.append('password',this.f.password.value);
    try{
      const result = await Axios.post(config.base_url+'accounts/login', formData
     );
      const data = result.data;
      console.log(data);
      
      if(data.status === "success"){
        console.log('sucecssfully logged in ');
        localStorage.setItem('user',JSON.stringify(data));
        console.log(data);
        this.authService.user = data;
        if(data.admin)
          this.router.navigate(['/orders-page']);
        else
          this.router.navigate(['/home-page']);
      }
      else
        this.dialog.nativeElement.showModal();
      }
    catch(error){
      console.log('errr');
      console.log(error);
     
    }
    
    
    // return false;
  }

  

  onSubmit(type: string): boolean {
    switch(type){
      case 'login':
        this.tryLogin();
        break;
      case 'register':
        this.tryRegister();
        break;
      default: console.log('This can never arise');
    }
    

    return true;
  }

  panelChangeButton(value: string){
    if(value === 'in'){
      this.container.nativeElement.classList.add("right-panel-active");
    }
    else{
      this.container.nativeElement.classList.remove("right-panel-active");
    }
  }

  onKeyUp(value: string | null,type: string ){
    console.log(value);
    console.log(type);

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    
    
  }
  

}
