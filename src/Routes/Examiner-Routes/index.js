import React from 'react'
import { Routes, Route } from "react-router-dom";
import CreateCourse from '../../Pages/Examiner-Panel/Create-Course/CreateCourse'
import CreateStudents from '../../Pages/Examiner-Panel/Create-Students/CreateStudents';
import ViewCourses from '../../Pages/Examiner-Panel/ViewCourses/ViewCourses';
import ViewStudent from '../../Pages/Examiner-Panel/ViewStudent/ViewStudent';
import AddSubject from '../../Pages/Examiner-Panel/AddSubject/AddSubject';
import ViewSubject from '../../Pages/Examiner-Panel/ViewSubject/ViewSubject';
import CreateSubject from '../../Pages/Examiner-Panel/Create-Subject/CreateSubject';
// import ExaminerProfile from '../../Pages/Examiner-Panel/ExaminerProfile/ExaminerProfile';
import CreateExam from '../../Pages/Examiner-Panel/CreateExam/CreateExam';
import StudentAddToExam from '../../Pages/Examiner-Panel/StudentAddTOExam/StudentAddToExam';
import ViewCourseInTable from '../../Pages/Examiner-Panel/ViewCourseInTable/ViewCourseInTable';
import ViewAllStudents from '../../Pages/Examiner-Panel/ViewAllStudents/ViewAllStudents';
import CreateQuestion from '../../Pages/Examiner-Panel/Create-question/CreateQuestion';
import ViewExam from '../../Pages/Examiner-Panel/ViewExam/ViewExam';
import ViewExamWithStudent from '../../Pages/Examiner-Panel/ViewExamWithStudent/ViewExamWithStudent';
import ViewQuestions from '../../Pages/Examiner-Panel/ViewQuestions/ViewQuestions';
import ViewResult from '../../Pages/Examiner-Panel/ViewResult/ViewResult';
// import ExamDetails from '../../Pages/Examiner-Panel/ExamDetails/ExamDetails';
const Index = () => {
  return (
    <>
<Routes>
    <Route path="/AddStudent" element={<CreateStudents />} />
    {/* <Route path="/" element={<ExaminerProfile/>} /> */}
    <Route path="/course" element={<CreateCourse />} />
    <Route path="/" element={<ViewCourses />} />
    <Route path="/viewStudents" element={<ViewStudent />} />
    <Route path="/AddSubject" element={<AddSubject />} />
    <Route path="/viewAllSubject" element={<ViewSubject />} />
    <Route path="/CreateSubject" element={<CreateSubject />} />
    <Route path="/CreateExam" element={<CreateExam/>} />
    <Route path="/createQuestion" element={<CreateQuestion/>} />
    <Route path="/StudentAddToExam" element={<StudentAddToExam/>} />
    <Route path="/CourseInTable" element={<ViewCourseInTable/>} />
    <Route path="/viewAllStudents" element={<ViewAllStudents/>} />
    <Route path="/examDetails" element={<ViewExam/>}/>
    <Route path="/viewExamWithStudent" element={<ViewExamWithStudent/>}/>
    <Route path="/viewQuestions" element={<ViewQuestions/>}/>
    <Route path="/Result" element={<ViewResult/>}/>
    </Routes>
    </>
  )
}

export default Index