import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";

// Student Pages
import StudentDashboard from "./pages/student/Dashboard";
import StudentLogbook from "./pages/student/Logbook";
import StudentInternships from "./pages/student/Internships";

// Teacher Pages
import TeacherDashboard from "./pages/teacher/Dashboard";
import TeacherPublications from "./pages/teacher/Publications";

// Institution Pages
import InstitutionDashboard from "./pages/institution/Dashboard";
import InstitutionAnalytics from "./pages/institution/Analytics";
import InstitutionReports from "./pages/institution/Reports";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <ThemeSwitcher />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="/login" element={<Login />} />

            {/* Student routes */}
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/student/logbook" element={<StudentLogbook />} />
            <Route path="/student/internships" element={<StudentInternships />} />
            <Route path="/student/profile" element={<Profile />} />

            {/* Teacher routes */}
            <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
            <Route path="/teacher/publications" element={<TeacherPublications />} />
            <Route path="/teacher/profile" element={<Profile />} />

            {/* Institution routes */}
            <Route path="/institution/dashboard" element={<InstitutionDashboard />} />
            <Route path="/institution/analytics" element={<InstitutionAnalytics />} />
            <Route path="/institution/reports" element={<InstitutionReports />} />
            <Route path="/institution/profile" element={<Profile />} />

            {/* Common routes */}
            <Route path="/settings" element={<Profile />} />

            {/* Catch all */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;