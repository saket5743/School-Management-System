import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Sidebar from "./components/Sidebar/Sidebar";
import Billing from "./components/Billing";
import NoTeacher from "./components/Teachers/NoTeacher";
import AddTeacher from "./components/Teachers/AddTeacher";
import ListTeacher from "./components/Teachers/ListTeacher";
import TeacherDetail from "./components/Teachers/TeacherDetail";
import Dashboard from "./components/Dashboard/Dashboard";
import SchoolAccount from "./components/Dashboard/SchoolAccount";
import SchoolPassword from "./components/Dashboard/SchoolPassword";
import StaffDashboard from "./components/Dashboard/StaffDashboard";
import SchoolLogin from "./components/Dashboard/SchoolLogin";
import NoStudent from "./components/Student/NoStudent";
import AddStudent from "./components/Student/AddStudent";
import ListStudent from "./components/Student/ListStudent";
import Studentdetail from "./components/Student/Studentdetail";

function App() {
  return (
    <div>
      <div></div>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/schoolaccount" element={<SchoolAccount />} />
          <Route path="/schoolpassword" element={<SchoolPassword />} />
          <Route path="/staffdashboard" element={<StaffDashboard />} />
          <Route path="/schoollogin" element={<SchoolLogin />} />
          {/* <Route path="/dashboard" element={<Dashboard />}>
            <Route path="schoolaccount" element={<SchoolAccount />} />
          </Route> */}
          <Route path="/teachers" element={<NoTeacher />} />
          <Route path="/addteachers" element={<AddTeacher />} />
          <Route path="/listteachers" element={<ListTeacher />} />
          <Route path="/teacherdetail" element={<TeacherDetail />} />
          <Route path="/student" element={<NoStudent />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/liststudent" element={<ListStudent />} />
          <Route path="/studentdetail" element={<Studentdetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
