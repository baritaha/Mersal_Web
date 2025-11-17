import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Value {
  title: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-about-company',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.scss']
})
export class AboutCompanyComponent {
  overviewText = 'Mersal Trading Company is a leading Jordanian company providing integrated digital solutions including electronic payments, vocational training, digital employment, and software services. We aim to empower individuals and businesses through a comprehensive digital service ecosystem.';

  visionText = 'To be the leading platform in Jordan and the region for providing integrated digital solutions that combine electronic payments, training, employment, and technical services, empowering individuals and businesses to achieve sustainable digital growth.';

  missionText = 'We believe that skills are the future of digital work. Therefore, we strive at Mersal to build a bridge between learning and application by training and qualifying individuals, then enabling them to provide their services to companies and users through a secure platform compatible with official electronic payment methods.';

  strategicGoals = [
    'Qualifying Jordanian and Arab competencies in digital and modern manual fields',
    'Enabling users to access professional services with ease and reliability',
    'Connecting trained individuals with companies and users seeking skills through the platform',
    'Enhancing trust and professionalism through accreditation and verification certificates',
    'Facilitating electronic payment for all services through digital wallets and "Any of Your Bills" service',
    'Providing software solutions and technical consultations through a dedicated team with high efficiency'
  ];

  values: Value[] = [
    {
      title: 'Empowerment',
      icon: 'fas fa-handshake',
      description: 'Empowering individuals and companies to access digital skills and services'
    },
    {
      title: 'Professionalism',
      icon: 'fas fa-award',
      description: 'Quality training and services according to high standards'
    },
    {
      title: 'Innovation',
      icon: 'fas fa-lightbulb',
      description: 'Digital solutions that connect training, work, and the market'
    },
    {
      title: 'Security',
      icon: 'fas fa-shield-alt',
      description: 'All financial operations are secured and documented'
    },
    {
      title: 'Responsibility',
      icon: 'fas fa-heart',
      description: 'Creating sustainable social and economic impact'
    }
  ];
}
