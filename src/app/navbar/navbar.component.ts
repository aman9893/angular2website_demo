
import { Component } from '@angular/core';
import{RouterModule} from '@angular/router';
import{Routes,Router} from '@angular/router';
@Component({
  selector: 'navbar',
  templateUrl:"./navbar.html"
})
export class navbarcomponent  { 
    
    private projectname="string";

    constructor()
    {
     this.projectname="Angular2";

    }


 }
  