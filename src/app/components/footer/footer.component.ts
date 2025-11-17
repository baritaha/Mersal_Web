import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  platform: string;
  icon: string;
  url: string;
}

interface QuickLink {
  label: string;
  sectionId: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule], // Remove RouterModule
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  email = 'info@mersal-trading.com';
  phones = ['0780797979', '0795141499'];
  address = 'Amman - Jordan';

  socialLinks: SocialLink[] = [
    { platform: 'LinkedIn', icon: 'linkedin', url: '#' },
    { platform: 'Twitter', icon: 'twitter', url: '#' },
    { platform: 'Facebook', icon: 'facebook', url: '#' },
    { platform: 'Instagram', icon: 'instagram', url: '#' }
  ];

  quickLinks: QuickLink[] = [
    { label: 'Home', sectionId: 'home' },
    { label: 'About Us', sectionId: 'about' },
    { label: 'Services', sectionId: 'services' },
    { label: 'Projects', sectionId: 'projects' },
    { label: 'Contact', sectionId: 'contact' }
  ];

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
