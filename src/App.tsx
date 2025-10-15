import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppLayout from "./app/app-layout";
import WebsiteLayout from "./app/website-layout";

import HomePage from "./pages/Home";
import RegistrationPage from "./pages/Registration";
import AdminDashboardPage from "./pages/admin/dashboard";
import StudentDashboardPage from "./pages/students/profile";
import CoursesPage from "./pages/CoursesPage";
import TeacherDashboardPage from "./pages/teachers/profile";
import TeachersPage from "./pages/TeachersPage";
import StudentTeachersPage from "./pages/students/teachers";
import StudentGradesPage from "./pages/students/grade";
import CoursesOnAdminPage from "./pages/admin/courses";
import StudentsPage from "./pages/admin/students";
import TeachersPageOnAdmin from "./pages/admin/teachers";
import CoursesStudentPage from "./pages/students/courses";
import TeacherStudentsPage from "./pages/teachers/studentsPage";
import TeacherCoursesPage from "./pages/teachers/coursesPage";
import LoginPage from "./pages/Login";

export default function App() {
  return (
    <Router>
      <Routes >
        {/* Basic routes */}
        <Route path="/" element={<WebsiteLayout><HomePage /></WebsiteLayout>} />
        <Route path="/register" element={<WebsiteLayout><RegistrationPage /></WebsiteLayout>} />
        <Route path="/courses" element={<WebsiteLayout><CoursesPage /></WebsiteLayout>} />
        <Route path="/teachers" element={<WebsiteLayout><TeachersPage /></WebsiteLayout>} />
        <Route path="/login" element={<LoginPage />} />

        {/* Admin board */}
        <Route path="/admin" element={<AppLayout role="admin"><AdminDashboardPage /></AppLayout>} />
        <Route path="/admin/courses" element={<AppLayout role="admin"><CoursesOnAdminPage /></AppLayout>} />
        <Route path="/admin/teachers" element={<AppLayout role="admin"><TeachersPageOnAdmin /></AppLayout>} />
        <Route path="/admin/students" element={<AppLayout role="admin"><StudentsPage /></AppLayout>} />

        {/* Teachers pages */}
        <Route path="/teacher" element={<AppLayout role="teacher"><TeacherDashboardPage /></AppLayout>} />
        <Route path="/teacher/courses" element={<AppLayout role="teacher"><TeacherCoursesPage /></AppLayout>} />
        <Route path="/teacher/students" element={<AppLayout role="teacher"><TeacherStudentsPage /></AppLayout>} />

        {/* Students pages */}
        <Route path="/student" element={<AppLayout role="student"><StudentDashboardPage /></AppLayout>} />
        <Route path="/student/teachers" element={<AppLayout role="student"><StudentTeachersPage /></AppLayout>} />
        <Route path="/student/grades" element={<AppLayout role="student"><StudentGradesPage /></AppLayout>} />
        <Route path="/student/courses" element={<AppLayout role="student"><CoursesStudentPage /></AppLayout>} />
      </Routes>
    </Router>
  );
}
