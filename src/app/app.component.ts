import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly name = 'Jayprakash Patidar';
  readonly title = 'Java Backend & Full-Stack Developer';
  readonly location = 'Open to Java backend or full-stack roles';

  readonly highlights = [
    '2+ years building full-stack and backend services with Java and Angular.',
    'Experienced in vehicle diagnostics and service tester tool development.',
    'Hands-on with CI/CD pipelines, Docker, and code quality automation.'
  ];

  readonly skills = [
    'Java 8–21',
    'Spring Boot',
    'REST APIs',
    'Angular',
    'SQL',
    'MongoDB',
    'CI/CD',
    'Azure',
    'Docker',
    'SonarQube'
  ];

  readonly projects = [
    {
      name: 'Vehicle Diagnostics Platform',
      description:
        'Built diagnostic workflows and dashboards to streamline troubleshooting and reporting.',
      tags: ['Java', 'Spring Boot', 'Angular']
    },
    {
      name: 'Service Tester Tooling',
      description:
        'Delivered tester utilities to validate service performance and quality across modules.',
      tags: ['REST APIs', 'SQL', 'MongoDB']
    },
    {
      name: 'CI/CD Automation',
      description:
        'Automated builds, containerization, and static analysis to improve delivery confidence.',
      tags: ['Azure', 'Docker', 'SonarQube']
    }
  ];

  readonly experience = [
    {
      role: 'Full Stack Developer',
      company: 'Vehicle Diagnostics Domain',
      time: '2+ years',
      summary: 'Delivered backend services, REST APIs, and Angular interfaces for diagnostics and tester tools.'
    }
  ];

  readonly contact = {
    email: '',
    emailNote: 'Email available upon request.',
    github: '',
    linkedin: '',
    availability: 'Open to Java backend or full-stack developer opportunities.'
  };
}
