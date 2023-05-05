import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  employeeArray: any[] = [];
  modalHidden: string = 'false';
  links = document.querySelector('modal');
  currentEmployeeId = '';
  name: string = '';
  address: string = '';
  phone: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllEmployee();
  }

  showModal() {
    this.modalHidden = 'true';
  }

  closeModal() {
    this.modalHidden = 'false';
  }

  getAllEmployee() {
    this.http
      .get('http://localhost:8000/user/getAll')
      .subscribe((resultData: any) => {
        this.employeeArray = resultData.data;
      });
  }

  register() {
    let employeeDetails = {
      name: this.name,
      address: this.address,
      phone: this.phone,
    };
    this.http
      .post('http://localhost:8000/user/create', employeeDetails)
      .subscribe((resultData: any) => {
        alert(`Employee Registered`);
        this.name = '';
        this.address = '';
        this.phone = '';
        this.currentEmployeeId = '';
        this.modalHidden = 'false';
        this.getAllEmployee();
      });
  }

  save() {
    if (this.currentEmployeeId == '') {
      this.register();
    } else {
      this.UpdateEmployeeRecords();
    }
  }

  setUpdateEmployee(data: any) {
    this.name = data.name;
    this.address = data.address;
    this.phone = data.phone;
    this.currentEmployeeId = data._id;
    this.showModal();
  }

  UpdateEmployeeRecords() {
    let employeeDetails = {
      name: this.name,
      address: this.address,
      phone: this.phone,
    };

    this.http
      .patch(
        'http://localhost:8000/user/update' + '/' + this.currentEmployeeId,
        employeeDetails
      )
      .subscribe((resultData: any) => {
        alert(`Employee Updated`);
        this.name = '';
        this.address = '';
        this.phone = '';
        this.getAllEmployee();
        this.modalHidden = 'false';
      });
  }

  deleteEmployee(data: any) {
    this.http
      .delete('http://localhost:8000/user/delete' + '/' + data._id)
      .subscribe((resultData: any) => {
        alert(`Delete Employee`);
        this.getAllEmployee();
      });
  }
}
