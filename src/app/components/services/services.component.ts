import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'AI & Data Science',
      description: 'Advanced AI solutions integrating natural language processing, predictive analytics, and customer insights.',
      icon: 'fas fa-robot',
      features: ['Machine Learning', 'Predictive Analytics', 'Natural Language Processing', 'Computer Vision']
    },
    {
      title: 'Custom Software Development',
      description: 'Scalable tech solutions ranging from apps to ERP systems customized to meet your business goals.',
      icon: 'fas fa-code',
      features: ['Web Applications', 'Mobile Apps', 'ERP Systems', 'Cloud Solutions']
    },
    {
      title: 'Digital Transformation',
      description: 'Comprehensive digital transformation services to modernize your business operations.',
      icon: 'fas fa-sync-alt',
      features: ['Process Automation', 'Cloud Migration', 'Digital Strategy', 'Change Management']
    },
    {
      title: 'IT Consulting',
      description: 'Expert technology consulting to help you make informed decisions and maximize ROI.',
      icon: 'fas fa-chart-line',
      features: ['Technology Audit', 'Strategic Planning', 'Implementation Support', 'Performance Optimization']
    }
  ];
}
