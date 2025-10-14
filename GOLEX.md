# GOLEX Knowledge Log

## Project Summary
The Unified Interface Platform (UIP) is a front-end prototype for the Smart India Hackathon 2025, designed to integrate educational data from NIRF, AISHE, and APAR into a cohesive dashboard for students, teachers, and institutions. It features role-based access with personalized dashboards, student logbook tracking, internship discovery, teacher verification workflows, institutional analytics, and secure authentication with Aadhar ID, APAR ID, and AISHE Code integration.

## Evolution Timeline
- 2025-10-08: Initial prototype created with landing page, login role selector, and role-based dashboards
- 2025-10-08: Added student features: dashboard, logbook, and internships
- 2025-10-08: Added teacher dashboard with student monitoring and logbook verification
- 2025-10-08: Added institution dashboard and analytics with visualizations
- 2025-10-08: Implemented custom GovTech Sapphire theme for government/educational aesthetic
- 2025-10-14: Enhanced student and teacher data models with detailed fields for performance tracking
- 2025-10-14: Added Staff & Students page to institution portal with comprehensive profiles
- 2025-10-14: Implemented detailed student and teacher profiles with tabbed interfaces
- 2025-10-14: Added "My Students" section to teacher portal with list, card, and analytics views
- 2025-10-14: Created student detail page with academic performance, skills, opportunities, and mentorship tabs
- 2025-10-14: Added student logbook verification functionality for teachers
- 2025-10-14: Enhanced login and registration with Aadhar ID, APAR ID, and AISHE Code integration

## Clarifications Needed
- Specific data structure requirements for NIRF/AISHE/APAR integration
- Authentication flow for actual implementation
- Requirements for mobile responsiveness and accessibility standards

## Repo Map
- `/app/repo/GOLEX.md`: Project knowledge log with essential information
- `/app/repo/apps/website/src/App.tsx`: Main application component with routing configuration
- `/app/repo/apps/website/src/index.css`: Global styles and theme configuration including the custom GovTech Sapphire theme
- `/app/repo/apps/website/src/components/ui/theme-switcher.tsx`: Theme switcher component with GovTech Sapphire as default
- `/app/repo/apps/website/src/contexts/AuthContext.tsx`: Authentication context for role-based access
- `/app/repo/apps/website/src/components/layout/`: Layout components (Navbar, Sidebar, MainLayout, DashboardLayout)
- `/app/repo/apps/website/src/components/dashboard/`: Dashboard components (StatCard, ChartCard, DataTable, etc.)
- `/app/repo/apps/website/src/pages/Home.tsx`: Landing page with features overview
- `/app/repo/apps/website/src/pages/Login.tsx`: Enhanced login page with Aadhar ID, APAR ID, and AISHE Code integration
- `/app/repo/apps/website/src/pages/About.tsx`: About page with project and team information
- `/app/repo/apps/website/src/pages/Help.tsx`: Help center with FAQs, documentation, and contact form
- `/app/repo/apps/website/src/pages/ErrorPage.tsx`: Custom 404 error page
- `/app/repo/apps/website/src/pages/student/`: Student-specific pages (Dashboard, Logbook, Internships)
- `/app/repo/apps/website/src/pages/teacher/Dashboard.tsx`: Teacher dashboard with student monitoring and logbook verification
- `/app/repo/apps/website/src/pages/teacher/Students.tsx`: List of students mentored by the teacher with search, filter, and sorting
- `/app/repo/apps/website/src/pages/teacher/StudentDetail.tsx`: Detailed student profile with academic, skills, opportunities, and mentorship tabs
- `/app/repo/apps/website/src/pages/teacher/StudentLogbook.tsx`: Student logbook verification interface for teachers
- `/app/repo/apps/website/src/pages/teacher/Publications.tsx`: Teacher's research publications management
- `/app/repo/apps/website/src/pages/institution/`: Institution-specific pages (Dashboard, Analytics, Reports, Staff)
- `/app/repo/apps/website/src/data/`: Mock data files for students, teachers, institution, logbook, etc.
- `/app/repo/apps/website/src/data/students.json`: Enhanced student data with academic performance, lifecycle tracking, etc.
- `/app/repo/apps/website/src/data/teachers.json`: Enhanced teacher data with evaluations, publications, teaching history, etc.
- `/app/repo/apps/website/src/pages/institution/Staff.tsx`: Page for managing students and staff data