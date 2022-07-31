import { Injectable } from '@angular/core';
import { Employee } from '../common/employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , map} from 'rxjs'
import { Department } from '../common/department';

@Injectable({
  providedIn: 'root'
})
export class ManagementServicesService {

  empurl = "http://localhost:8080/api/emp"
  depturl = "http://localhost:8080/api/dept"

 

  constructor(private httpclient : HttpClient) { }
  getAllEmployees() : Observable<Employee[]>{
    console.log(this.httpclient.get<getEmployeeResponse>(this.empurl).pipe(map(response => response._embedded.employees)))
    return this.httpclient.get<getEmployeeResponse>(this.empurl).pipe(map(response => response._embedded.employees))
  }

  getAllDepartments() : Observable<Department[]>{
    console.log(this.httpclient.get<getDepartmentResponse>(this.depturl).pipe(map(response => response._embedded.departments))) 
    return this.httpclient.get<getDepartmentResponse>(this.depturl).pipe(map(response => response._embedded.departments))
  
  }

  saveEmployee(employee :Employee):Observable<Employee>{
  console.log(employee)

  const httpOptions = {
    headers: new HttpHeaders({
      'content-type' : 'application/json',
      'Authorization' : 'auto-token',
      'Access-Control-Allow-origin' : '*'
    })
  };
  return this.httpclient.post<Employee>(this.empurl,employee,httpOptions);
  }


}

interface getEmployeeResponse {
  _embedded : {
    employees : Employee[]
  }
}

interface getDepartmentResponse {
  _embedded : {
    departments : Department[]
  }
}


