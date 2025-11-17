// contact.component.ts
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactInfo = {
    email: 'info&#64;mersal-trading.com',
    phones: ['0780797979', '0795141499'],
    address: 'Amman - Jordan'
  };

  // Renamed to avoid conflict with template reference
  formData = {
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  };

  // Scroll to top arrow visibility
  showScrollArrow = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show the arrow when the user scrolls down 300px from the top
    this.showScrollArrow = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  onSubmit(contactForm: NgForm) {
    // Handle form submission here
    console.log('Form submitted:', this.formData);
    alert('Thank you for your message! We will get back to you soon.');

    // Reset form
    this.formData = {
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    };

    // Also reset the form validation
    contactForm.resetForm();
  }
}
