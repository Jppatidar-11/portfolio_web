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
  readonly name = 'Avery Parker';
  readonly title = 'Full-Stack Engineer + Observability Advocate';
  readonly location = 'Austin, TX · Open to remote';

  readonly highlights = [
    '8+ years building resilient platforms for fintech and SaaS teams.',
    'Led MTTR reduction programs by pairing incident data with design systems.',
    'Focused on developer experience, SLOs, and clean UI foundations.'
  ];

  readonly skills = [
    'Angular 17',
    'TypeScript',
    'Node.js',
    'Spring Boot',
    'PostgreSQL',
    'Kubernetes',
    'Grafana',
    'OpenTelemetry',
    'CI/CD',
    'Design Systems'
  ];

  readonly projects = [
    {
      name: 'Incident Command Center',
      description:
        'Unified on-call tooling with automated runbooks, Slack actions, and release tracking to cut response time by 32%.',
      tags: ['Angular', 'Nx', 'RxJS', 'Material']
    },
    {
      name: 'Alert Noise Lab',
      description:
        'Alert routing engine that clusters noisy events and recommends suppression rules using service ownership graphs.',
      tags: ['Spring Boot', 'Kafka', 'Redis', 'Grafana']
    },
    {
      name: 'Portfolio Web',
      description:
        'A fast, accessible portfolio template built with standalone Angular components and SCSS tokens.',
      tags: ['Angular', 'SCSS', 'Accessibility']
    }
  ];

  readonly experience = [
    {
      role: 'Senior Front-End Engineer',
      company: 'SignalOps',
      time: '2021 — Present',
      summary: 'Built incident analytics dashboards, shipped design system v2, and mentored 4 engineers.'
    },
    {
      role: 'Full-Stack Engineer',
      company: 'Flux Financial',
      time: '2018 — 2021',
      summary: 'Owned reliability metrics platform, migrated legacy services to Spring Boot, and improved alert routing.'
    },
    {
      role: 'UI Engineer',
      company: 'Sparkline Labs',
      time: '2016 — 2018',
      summary: 'Created responsive reporting suite and introduced accessibility standards across product teams.'
    }
  ];

  readonly contact = {
    email: 'hello@averyparker.dev',
    github: 'github.com/averyparker',
    linkedin: 'linkedin.com/in/averyparker',
    availability: 'Available for product + platform consulting starting May 2025.'
  };
}
