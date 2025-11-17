import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { AboutCompanyComponent } from "./components/about-company/about-company.component";
import { ServicesComponent } from "./components/services/services.component";
import { PlatformsComponent } from "./components/platforms/platforms.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HeroSectionComponent, AboutCompanyComponent, ServicesComponent, PlatformsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mersal-website';
}
