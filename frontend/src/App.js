import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
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
import { CreateAnswerForm } from "./components/answermodal/CreateAnswerForm";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <NavBar setUser={setUser}/>
      <Routes>

        <Route path="/"></Route>
        <Route path="about"></Route>
        {/* <Route exact path="/assessments/:id" element={<QuestionList />}></Route> */}
        <Route exact path="/assessments/:assessmentid" element={<QuestionList />}></Route>
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

        <Route path="blog"></Route>
        <Route path="contacts"></Route>

        <Route path="signup" element={<SignUp />}></Route>
        <Route path="login" element={<Login setUser={setUser} user={user} />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="home" element={<HomePage />}></Route>
        <Route path="topics" element={<TopicsHome />}></Route>
        {/* <Route path="takeassessment" element={<TakeAssessment />}></Route> */}

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
