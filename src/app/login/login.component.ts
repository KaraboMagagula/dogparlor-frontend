import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../services/customer/customer.service';
import { StaffService } from '../services/staff/staff.service';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Staff } from '../models/staff';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private customerService: CustomerService, private staffService: StaffService , private router: Router) {}
  
  login(logForm: NgForm) {
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    const phoneRegex = new RegExp(/^(?:\+27|0)(?:(?:\d{2}[-\s]?\d{3}[-\s]?\d{4})|(?:\d{2}[-\s]?\d{7}))$/);

    let loginData = {
      contactValue: logForm.value.username,
      contactType: {
        isEmail: emailRegex.test(logForm.value.username),
        isPhone: phoneRegex.test(logForm.value.username)
      }
    };
    
    this.customerService.getCustomers(loginData).subscribe(customer => {
      if (customer !== null) {
        localStorage.setItem('customer', JSON.stringify(customer));
        this.router.navigate(['/home']);
      } else {
        alert('This user does not exist');
      }
    }
    );
    this.staffService.getStaff().subscribe(staff => {
      if (staff !== null) {
        localStorage.setItem('staff', JSON.stringify(staff));
        this.router.navigate(['/home']);
      } else {
        alert('This staff user does not exist');
      }
    }
    );
  }
}
