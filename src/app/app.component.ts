import { Component } from '@angular/core';
import {AppService} from './app.service';
import {Feature} from './feature';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Feature Request';  
  results : any;
  model= new Feature();
  input :any;
  constructor(public appService : AppService ){
    this.getFeatures();
  }
  submit(){
    //console.log(this.model);
    this.appService.saveFeature(this.model).subscribe(res=>{
      this.model = res.results;
    });
    this.getFeatures();
  }
  
  getFeatures(){
    this.appService.getFeatures().subscribe(res=>{
      this.results = res;
     // console.log(this.results);
    });
  }
}
