import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/common/employee';
import { ManagementServicesService } from 'src/app/services/management-services.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
 

  employees : Employee[]
 
  constructor(private service : ManagementServicesService,private route:Router,private activeRoute:ActivatedRoute) { }
  formModel : Employee = new Employee(0,"","","",0,0,0,0);
  


  ngOnInit(): void {
    this.listOfEmployees()
    this.activeRoute.paramMap.subscribe(() =>{
      this.listOfEmployees()});
  }

  

   listOfEmployees(){
    this.service.getAllEmployees().subscribe(data=>{
      console.log(data); 
      this.employees = data;
    })
   }

   onSubmit(form:NgForm){
    this.employees.push(form.value);
    }
}
