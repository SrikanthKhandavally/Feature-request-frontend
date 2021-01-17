import { Injectable } from '@angular/core';
 
import { HttpClient } from '@angular/common/http';
 
import 'rxjs/add/operator/map';
 
import 'rxjs/add/operator/catch';
 
import { Observable } from 'rxjs/Observable';
 import {Feature} from './feature';

 
@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }
 
getFeatures(): Observable<Feature[]> {
  try {
    return this.http.get('http://localhost:8080/getFeatures') .map(res=>res) ;
  }catch (error) { 
    console.log(error);
  }  
}
saveFeature(model:Feature):Observable<any>{
try {
    return this.http.post('http://localhost:8080/saveFeature', model) .map(res=>res) ;
  }catch (error) { 
    console.log(error);
  }  
}

}
