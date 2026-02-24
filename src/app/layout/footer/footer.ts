import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [FormsModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  form = {
    name: '',
    email: '',
    phone: '',
    service: '',
    address: '',
    message: ''
  };

  successMessage = false;

  sendEmail() {
    
      emailjs.send(
        'service_r7y2q3k',
        'template_0mtqrb5',
        {
          from_name: this.form.name,
          from_email: this.form.email,
          from_phone: this.form.phone,
          from_service: this.form.service,
          from_address: this.form.address,
          from_message: this.form.message
        },
        'WWWK-PbiXR4Cr32VQ'
      ).then(() => {

        this.successMessage = true;

        this.form = {
          name: '',
          email: '',
          phone: '',
          service: '',
          address: '',
          message: ''
        };

      }, (error) => {
        console.error(error);
      });
    
  }
}