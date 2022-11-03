import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/navbar/NavBar";
import { Assessments } from "./pages/assessments";
import { Dashboard } from "./pages/dashboard";
import { CreateAssessment } from "./pages/dashboard/createassessment";
import { CreateQuestion } from "./pages/dashboard/createquestion";
import QuestionList from "./pages/questions/QuestionList";
import { Login } from "./pages/login/LoginForm";
import { SignUp } from "./pages/signup/signupform";
import { HomePage } from "./pages/home/home";
import { TopicsHome } from "./pages/topics/index";
import Footer from "./components/footer/footer";
import TakeAssessment from "./pages/assessments/TakeAssessment"
import StudentAssessment from "./pages/assessments/StudentAssessments"
import { CreateAnswerForm } from "./components/answermodal/CreateAnswerForm";
import { ErrorPage } from "./pages/error-page/errorpage";
import { Faqs } from "./pages/faqs/faqs";
import { Blog } from "./pages/blog/blog";
import { AboutUs } from "./pages/about-us/aboutus";
import { ContactUs } from "./pages/contact-us/contactus";

function App() {
  const [user, setUser] = useState(null);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate()
  return (
    <div className="App">
      <NavBar setUser={setUser}/>
   
      <Routes>

        <Route path="/"></Route>
        <Route path="about"></Route>
        {/* <Route exact path="/assessments/:id" element={<QuestionList />}></Route> */}
        <Route exact path="/assessments/:assessmentid" element={<QuestionList />}></Route>
        {/* <Route exact path="/studentassessments/:id" element={<StudentAssessment />}></Route> */}
        <Route path="assessments" element={<Assessments user={user} />}></Route>
        <Route path="question"></Route>
        <Route path="tm" ></Route>
        <Route path="assessment"></Route>
        <Route
          path="assessments/create-assessment"
          element={<CreateAssessment user={user} setUser={setUser} />}
        ></Route>
        <Route path="/assessments/:assessmentid/create-question" element={<CreateQuestion />}></Route>
        <Route path="/assessments/:assessmentid/questions/:id" element={<CreateAnswerForm />}></Route>

        <Route path="students/:id/assessments/:id" element={<TakeAssessment />}></Route>
        <Route path="students/:id" element={<StudentAssessment />}></Route>
        {
          userInfo ? (
            <Route path="*" element={<ErrorPage/>}></Route> 

          ) : (     
            <>
            
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>

            </>
          )
        }
                <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="home" element={<HomePage />}></Route>
        <Route path="faqs" element={<Faqs />}></Route>
        <Route path="blog" element={<Blog />}></Route>
        <Route exact path="about-us" element={<AboutUs/>}></Route> 
        <Route exact path="contact-us" element={<ContactUs/>}></Route> 

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
