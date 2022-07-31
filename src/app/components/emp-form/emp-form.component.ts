import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/common/employee';
import { ManagementServicesService } from 'src/app/services/management-services.service';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {
  employees: Employee[];
  employee: Employee;

  constructor(private service : ManagementServicesService,private route:Router) { }
  formModel : Employee = new Employee(0,"","","",0,0,0,0);

  ngOnInit(): void {
    this.listOfEmployees()
  }

  listOfEmployees(){
    this.service.getAllEmployees().subscribe(data=>{
      console.log(data); 
      this.employees = data;
    })
   }

   onSubmit(form:NgForm){
    
    this.service.saveEmployee(this.employee).subscribe(data => {
      console.log(data)
      this.route.navigateByUrl("/employeees");
      });
  }
}