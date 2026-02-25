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
  loading = false;
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
  if (this.loading) return;
  this.loading = true;
  this.successMessage = false;

  
  const adminParams = {
    from_name: this.form.name,
    from_email: this.form.email,
    from_phone: this.form.phone,
    from_service: this.form.service,
    from_address: this.form.address,
    from_message: this.form.message
  };

  // Ambos envíos por separado para evitar bloqueos de Gmail
  
    // Envío para admin
    emailjs.send(
      'service_r7y2q3k',
      'template_0mtqrb5',
      adminParams,
      'WWWK-PbiXR4Cr32VQ'
    ).then(() => {
      console.log("Correo al admin enviado con éxito");
      this.successMessage = true;
    this.form = { name: '', email: '', phone: '', service: '', address: '', message: '' };
    }).catch((error) => {
      console.error("Error en el envío al admin:", error);
      this.loading = false;
    }).finally(() => {
      this.loading = false;
    });
/*
    emailjs.send(
      'service_r7y2q3k',
      'template_0mtqrb5',
      adminParams,
      'WWWK-PbiXR4Cr32VQ'
    )
  
  .then(() => {
    console.log("Correo al admin enviado con éxito");
    
    setTimeout(() => {
      
    // Envío para EL CLIENTE
    emailjs.send(
      'service_r7y2q3k',
      'template_8v3q13k',
      adminParams,
      'WWWK-PbiXR4Cr32VQ'
    ).then(() => {
      console.log("Ambos correos enviados con éxito");
      this.successMessage = true;
    this.form = { name: '', email: '', phone: '', service: '', address: '', message: '' };
    }).catch((error) => {
      console.error("Error en el envío al cliente:", error);
    }).finally(() => {
      this.loading = false;
    });
    }, 3000);
    
  })
  .catch((error) => {
    console.error("Error en el envío principal:", error);
    this.loading = false;
  });*/
}

}