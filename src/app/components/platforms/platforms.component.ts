import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Platform {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: {
    forTrainees?: string[];
    forFreelancers?: string[];
    forCompanies?: string[];
  };
  whyUnique: string[];
  video?: string;
  videoCaption?: string;
}

@Component({
  selector: 'app-platforms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.scss']
})
export class PlatformsComponent implements AfterViewInit {
 ngAfterViewInit() {
    this.initAllVideos();
  }

  private initAllVideos() {
    const videos: NodeListOf<HTMLVideoElement> = document.querySelectorAll('video');
    videos.forEach(video => {
      video.muted = true;
      video.loop = true;
      video.playsInline = true;

      video.addEventListener('canplaythrough', () => {
        video.play().catch(err => {
          console.warn('Video autoplay blocked:', err);
        });
      });
    });

    // Optional: restart videos on page refresh
    window.addEventListener('beforeunload', () => {
      videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
      });
    });
  }
  platforms: Platform[] = [
    {
      id: 'directhub',
      title: 'DirectHub',
      subtitle: 'Professional Empowerment & Digital Employment Platform',
      description: 'A platform for training and qualifying individuals in fields like AI, graphic design, handicrafts, digital marketing, then connecting them with companies and users seeking skills.',
      features: [
        'Professional Training Programs: Specialized courses in various fields supervised by professional experts',
        'Accreditation & Certificates: Granting reliable and recognized certificates to successful graduates',
        'Connecting Competencies with Opportunities: Connecting service providers with companies and individuals seeking specialized skills',
        'Freelancer Support: Building strong professional reputation through customer ratings and completed projects',
        'Integrated Digital Platform: Easy-to-use interface for managing services, courses, clients, and payments',
        'Mobile Application: Available for all devices to facilitate access to the platform anytime, anywhere'
      ],
      benefits: {
        forTrainees: [
          'Opportunity to learn new skills',
          'Obtain accredited certificates',
          'Launch towards freelance work or employment'
        ],
        forFreelancers: [
          'Expand client base',
          'Professional management of services and projects',
          'Build strong reputation in the digital market'
        ],
        forCompanies: [
          'Access to specialized competencies quickly',
          'Contract with reliable providers',
          'Ensure quality of services provided'
        ]
      },
      whyUnique: [
        'First platform in Jordan that combines vocational training and digital employment linked to the labor market',
        'Direct connection between trained individuals and companies/users seeking skills',
        'Secure and reliable payment through Direct Fawry, e-wallets, and Any of Your Bills service',
        'Empowering freelancers and youth to build their professional reputation and access real job opportunities',
        'Comprehensive and easy-to-use digital environment for all parties'
      ],
      video: 'assets/videos/digital.mp4',
      videoCaption: 'DirectHub connects skilled professionals with opportunities in the digital market'
    },
    {
      id: 'direct',
      title: 'Direct Fawry',
      subtitle: 'Electronic Payment Platform',
      description: 'Direct Fawry is the financial arm of the Mersal ecosystem, enabling users to make secure electronic payments through various channels.',
      features: [
        'Pay all types of bills through "Any of Your Bills" and local e-wallets',
        'Recharge balance and telecommunication services',
        'Purchase digital game cards',
        'Payment for training or professional services within the platform',
        'POS devices for all retail stores',
        'Secure and easy financial transactions without additional fees'
      ],
      benefits: {},
      whyUnique: [],
      video: 'assets/videos/pay.mp4',
      videoCaption: 'Secure and convenient payment solutions for all your needs'
    },
    {
      id: 'software',
      title: 'Software & AI Services',
      subtitle: 'Custom Software Solutions & AI Integration',
      description: 'Mersal provides advanced solutions in software development and AI-based technologies to support digital transformation and enhance business efficiency.',
      features: [
        'Developing advanced mobile applications for companies and institutions',
        'Designing innovative digital solutions that meet business needs',
        'Integrating financial platforms, training, and employment services into unified digital solutions',
        'AI solutions including machine learning models, smart automation, computer vision technologies, and natural language processing tools',
        'Web applications and customized mobile apps',
        'Enterprise system integration and scalable digital platform design'
      ],
      benefits: {},
      whyUnique: [],
      video: 'assets/videos/software3.mp4',
      videoCaption: 'Cutting-edge software and AI solutions for modern businesses'
    }
  ];



  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
