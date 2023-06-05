import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  openSideMenu() {
    throw new Error('Method not implemented.');
  }
  title = 'SignRecordProject';

  @ViewChild('menuBar') menuBar : any;

  @ViewChild('container') container : any | undefined;
  /**
   *
   */
  constructor(private authService : AuthService,private router : Router) {
    
    
  
    
  }
  
  toggleNavbar(){
    var burger = document.getElementById("navbar-default");
    if (burger) {
      burger.className =  burger.className === "hidden w-full md:block md:w-auto" ? " w-full md:block md:w-auto" : "hidden w-full md:block md:w-auto";
      
    }
    
  }
  toggleSlideBar(element : HTMLElement){
    element.classList.toggle("active");

  }

  ngAfterViewInit(): void {
    

  }
  
  openMenu(bool : boolean){
    if (bool) {
      this.menuBar.nativeElement.classList.remove("hidden");
    }
    else{
      this.menuBar.nativeElement.classList.add("hidden");
    }
  }

  navToPopDb(){
    this.router.navigate(["/populateDictionary"]);
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem("user");
    window.location.reload();
  }


  checkForConnected(){
    if (localStorage.getItem('token') === null) {
      return true;
    }
    return false;
  }
}
