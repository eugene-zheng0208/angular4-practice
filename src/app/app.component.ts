import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kidan';
  color = '#000';
  dis = "";  
  name = "Nugen";
  name_length = 0;
  // printHello() {
  //   console.log("Hello!");
  //   this.dis = "disabled";
   
  //   setInterval(()=> {
  //     console.log("hey");
  //     this.dis = "";
  //   },3000);
    
  // }
  

  checkColor()
  {
    if(this.name_length > 5 )
      {
        return 'red';
      }else{
        return 'green';
      }
  }
  setNameLength(){
    this.name_length = this.name.length;
    // console.log("name length function called");  
  }

    
  resetName(){
    this.name = "Nugen";
    
  }

  

}
