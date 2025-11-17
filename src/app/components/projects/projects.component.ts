import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  client: string;
  outcome: string;
  technologies: string[];
  reference?: string;
  isExpanded: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'OrbitHR - Recruitment Tracking System',
      description: 'A recruitment system that simplifies the hiring process by managing essential steps in one place. It identifies candidates who meet job criteria and stores their standardized CVs for easy review.',
      client: 'HR Departments & Recruitment Agencies',
      outcome: 'Streamlined hiring process with automated candidate tracking, interview scheduling, and data-driven insights.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express'],
      reference: 'Giant Tech - Salam@salam-it.com',
      isExpanded: false
    },
    {
      title: 'Customer Relationship Management (CRM) System',
      description: 'A comprehensive tool designed to store, manage, and analyze customer data. Helps update customer contact information, track interactions, and provide actionable insights.',
      client: 'Sales & Customer Service Teams',
      outcome: 'Enhanced customer relationships, effective data management, increased customer lifetime value, and actionable reports.',
      technologies: ['React', 'Python', 'PostgreSQL', 'Django'],
      reference: 'Giant Tech - Salam@salam-it.com',
      isExpanded: false
    },
    {
      title: 'Learning Management System (LMS)',
      description: 'A powerful software solution for creating, distributing, and managing educational content in traditional and electronic learning environments.',
      client: 'Educational Institutions & Corporate Training',
      outcome: 'Streamlined course management, increased engagement, instant tracking, and flexible learning options.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
      reference: 'Firas Shalabi - firas.shalabi@fratello-holding.com',
      isExpanded: false
    }
  ];

  toggleProject(index: number): void {
    this.projects[index].isExpanded = !this.projects[index].isExpanded;
  }
}
