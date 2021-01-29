import { Injectable } from '@angular/core';
import {  Observable, Observer } from 'rxjs';
import User from './models/user.model';
import Axios from 'axios';
import {config} from '../config';
import * as qs from 'qs';
import jsontoformdata from '@ajoelp/json-to-formdata';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: any;


  constructor() {
  

   }

  public retrieveUserSession(){

  }

  public persistUser(){
    //Session persisted automatically

  }

  public logout(){

  }

  
  public async register(email: string, password: string, name: string) {
    //Retrieve first and last name
    var first_name: string | null = " ", last_name: string | null = " ";
    var middle_name = " ";
    {
      var tempString = name.split(" ");
      if(tempString.length > 3)
        return {
          error: "name",
          message: "Name cannot have more than three spaces",
        }
      else
        try{
          first_name = tempString[0];
          middle_name = tempString[1];
          last_name = tempString[tempString.length-1];
        }
        catch(error){}
    }
    //Send registration request
    var form_data = jsontoformdata({
        action: 'register', 
        email: email,
        first_name: first_name,
        last_name: last_name,
        middle_name: ' ',
        password: password
    })
    try{
      var res = await Axios.post(config.base_url+"accounts/register", form_data);
      var data = res.data;
      console.log(res.data);
      if( data.status == "success")
        this.user = data;
      return res.data;
    }
    catch(error){
      return {
        reason: "Network timed out, server did not respond. Please try again later",
        error: "Connection"
      }
    }
    


  }
}
