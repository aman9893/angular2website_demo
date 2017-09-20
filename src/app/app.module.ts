import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { navbarcomponent}  from './navbar/navbar.component';
import { AppComponent }  from './app.component';
import{homecomponent} from './home/home.component'
import { aboutcomponent }  from './about/about.component';
import { headercomponent }  from './header/app.headercomponent';
import { footercomponent }  from './footer/footer.component';
import {logincomponent }  from './login/login.component';
import{RouterModule} from '@angular/router'
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule ,FormsModule ,
    RouterModule.forRoot([
     // {path: '/', component: homecomponent },
      {path:  'home',component:homecomponent},
      {path: 'about',component :aboutcomponent},
      {path: 'login',component:logincomponent},
      
     //{path: '/*',           component:homecomponent  }
  ])
  
  ],
  declarations: [ AppComponent ,footercomponent,logincomponent, navbarcomponent,homecomponent,headercomponent,aboutcomponent],
  bootstrap:    [ AppComponent ]


})
export class AppModule { }
