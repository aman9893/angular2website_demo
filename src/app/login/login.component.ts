
import { Component } from '@angular/core';
import {Person} from '../login/person';
@Component({
  selector: 'login',
  templateUrl: "./login.html",
  styleUrls:['./login.css']
})
export class logincomponent  { 
     persons: Person[] = [];
  counter = 0;
  person: Person;
  
  onSubmit(value:any) { 
    this.person = new Person(value.name, value.email, value.age);
    if(value) {
      this.persons.push(this.person);
    }
    this.counter++;
  }
}

