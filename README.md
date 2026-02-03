# Developer Intelligence Dashboard — Incident & Alert Monitoring Tool

> **Concept:** An enterprise-grade “Developer Intelligence Dashboard” focused on **Incident & Alert Monitoring**, designed to help engineering orgs triage system health, identify noisy services, and track MTTR trends. This is a realistic internal tool that can later be backed by a Spring Boot API (mock data for now).

---

## Project Overview
This dashboard centralizes **incident streams**, **alert noise**, and **recovery metrics** into a single operational view. Teams can quickly identify the highest-impact services, drill into incident timelines, and analyze trends like MTTR and alert fatigue over time.

**Why this is the best option:**
- **High operational value:** Every modern engineering org struggles with alert noise and slow incident response.
- **Enterprise feel:** Dashboards, role-based access, audit logs, and analytics are standard internal tooling.
- **Scales with data:** Easy to integrate later with Spring Boot APIs and observability platforms.

---

## Tech Stack
- **Angular 17+** (standalone components + lazy routing)
- **RxJS** (Subjects, BehaviorSubject, switchMap, debounceTime)
- **Angular Material** (enterprise UI system)
- **JSON Server / Angular In-Memory Web API** (mock backend)
- **SCSS** (BEM + modular partials)

---

## Architecture Diagram (Textual)
```
[UI Components] --> [Feature Facades / State Services] --> [API Services]
        |                      |                              |
        |                      v                              v
  [Routing + Guards]     [RxJS Store]                    [Mock Backend]
        |
        v
[Interceptors: Auth + Logging + Error Handling]
```

---

## Key Features
- **Role-based access** (viewer, responder, admin)
- **Incident dashboard** with charts + KPI cards
- **Alert noise analytics** + search with debounce
- **Tables with sorting, filtering, pagination**
- **Dark / light theme toggle**
- **Responsive layout** (desktop-first, mobile-safe)
- **Mock auth + pagination/filtering**

---

## Folder Structure (Modular)
```
src/
  app/
    core/                  # singleton services, guards, interceptors
      auth/
      interceptors/
      error/
    shared/                # reusable UI, pipes, directives
      components/
      models/
      styles/
    features/              # lazy-loaded feature modules (standalone routes)
      dashboard/
      incidents/
      alerts/
      settings/
    app.routes.ts
    app.config.ts
  assets/
  environments/
```

---

## Technical Decisions (Why Each Choice)
- **Standalone Components:** reduce module boilerplate, speed dev, align with Angular 17+ best practices.
- **Lazy-loaded Routes:** performance optimization (load features on demand).
- **Route Guards:** protect secure views; role guard ensures compliance in enterprise apps.
- **Reactive Forms:** needed for complex validation (incident filters, SLA windows, role-based input).
- **RxJS:**
  - `BehaviorSubject` for in-memory state
  - `Subject` for UI events
  - `switchMap` for API chaining
  - `debounceTime` for search inputs
- **Centralized State:** feature-level state services (facades) keep components clean.
- **HTTP Interceptors:** auth token injection + logging for observability.
- **Error Handling:** centralized error service + global HttpErrorResponse handling.
- **Environment Config:** prod/dev configs for API base URLs and feature flags.
- **SCSS Architecture:** partials + theme tokens for scalable UI design.

---

## Mock Backend
Using **JSON Server** or **Angular In-Memory Web API**:
- Simulate **auth login**
- Return **role-based responses**
- Support **pagination + filtering**

### API Contracts (Example Interfaces)
```ts
export interface Incident {
  id: string;
  title: string;
  severity: 'SEV1' | 'SEV2' | 'SEV3';
  status: 'open' | 'mitigated' | 'resolved';
  service: string;
  createdAt: string; // ISO
  resolvedAt?: string; // ISO
}

export interface IncidentQuery {
  page: number;
  pageSize: number;
  search?: string;
  severity?: Incident['severity'];
  status?: Incident['status'];
}
```

---

## Sample Code Snippets

### Auth Interceptor
```ts
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    const authReq = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;
    return next.handle(authReq);
  }
}
```

### Role Guard
```ts
export const roleGuard: CanMatchFn = (route) => {
  const roles = inject(AuthService).roles$;
  return roles.pipe(map(r => r.includes(route.data?.['requiredRole'])));
};
```

### Reactive Form + Validation
```ts
this.filterForm = this.fb.group({
  query: ['', [Validators.maxLength(50)]],
  severity: [''],
  status: [''],
  dateRange: this.fb.group({
    from: [null],
    to: [null]
  }, { validators: dateRangeValidator })
});
```

### RxJS Search w/ debounce
```ts
this.filterForm.get('query')!.valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(query => this.incidentService.search(query))
).subscribe();
```

---

## Testing Strategy
- **Services:** mock HttpClient with HttpTestingController
- **Components:** isolate business logic + mock services
- Focus on:
  - data transformation
  - form validation logic
  - guard behavior

---

## Deployment (Free Hosting)
### Build Optimization
```bash
ng build --configuration production
```

### Environment Config
- `environment.ts` → dev baseUrl
- `environment.prod.ts` → prod baseUrl

### Deploy Options
**Netlify**
1. Run `ng build --configuration production`
2. Drag & drop `/dist` in Netlify
3. Add `_redirects` for SPA routing

**Vercel**
1. Install Vercel CLI
2. Deploy `dist/`

**GitHub Pages**
1. `ng add angular-cli-ghpages`
2. `ng deploy --base-href=/repo-name/`

---

## README Checklist
- Project overview ✅
- Tech stack ✅
- Architecture diagram ✅
- Features ✅
- Screenshots placeholders ✅
- How to run locally ✅
- Deployment link placeholder ✅
- What this proves ✅

---

## Screenshots
- Dashboard Overview — *(placeholder)*
- Incident Detail View — *(placeholder)*

---

## How to Run Locally
```bash
npm install
npm run mock:api
npm start
```

---

## Deployment Link
*(Add deployed URL here once live)*

---

## What This Project Proves
- I can design **enterprise-grade Angular apps** with real-world architecture
- I understand **RxJS-driven data flows** and maintainable UI systems
- I can build **scalable front-end foundations** ready for Spring Boot APIs
