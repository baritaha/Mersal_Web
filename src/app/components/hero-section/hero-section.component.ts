import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.tryPlayVideo();
  }

  tryPlayVideo() {
    const video: HTMLVideoElement | null = document.querySelector('.video-bg');
    if (video) {
      // Ensure video is muted (browsers allow autoplay only for muted)
      video.muted = true;
      video.loop = true;
      video.playsInline = true;

      // Use canplaythrough to ensure video is loaded
      video.addEventListener('canplaythrough', () => {
        video.play().catch((err) => {
          console.warn('Video autoplay blocked:', err);
        });
      });
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
