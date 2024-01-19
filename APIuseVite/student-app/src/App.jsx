import { Route, Routes } from "react-router-dom";
import "./App.css";
import DepartmentPage from "./pages/DepartmentPage";
import StudentPage from "./pages/StudentPage";
import StudentList from "./components/student/StudentsList";
import CreateStudent from "./components/student/CreateStudent";
import StudentDetail from "./components/student/StudentDetail";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/department" element={<DepartmentPage />} />
        <Route path="/dashboard" element={<DepartmentPage />} />
        <Route path="/student" element={<StudentPage />}>
          <Route index element={<StudentList />} />
          <Route path="list" element={<StudentList />} />
          <Route path="add" element={<CreateStudent />} />
          <Route path=":studentId" element={<StudentDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
//ke thua route
//16 "index"auto khi chon student thi hien student list
//:studentId la dynamic routing: cai gi sau : la id-> luon de duoi cung
