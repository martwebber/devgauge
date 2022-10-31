import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/navbar/NavBar";
import { Assessments } from "./pages/assessments";
import { Dashboard } from "./pages/dashboard";
import { CreateAssessment } from "./pages/dashboard/createassessment";
import { CreateQuestion } from "./pages/dashboard/createquestion";
import { Login } from "./pages/login/LoginForm";
import { SignUp } from "./pages/signup/signupform";
import { HomePage } from "./pages/home/home";

function App() {
  const [user, setUser] = useState(null);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log(userInfo)
   

  /*
      USEEFFECT CAUSING AN ERROR
  */

  //   const config = {
  //     headers:{
  //       Authorization: 'Bearer ' + userInfo.jwt    }
  //   }
  // useEffect(() => {
  //   fetch("http://localhost:3000/me", config)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data)
  //   })

  // }, [])

  console.log(user)

  return (
    <div className="App">
      <NavBar />
      <Routes>

        <Route path="/"></Route>
        <Route path="about"></Route>
        <Route path="assessments" element={<Assessments user={user} />}></Route>
        <Route path="question"></Route>
        {/* <Route path="tm" ></Route> */}
        <Route path="assessment"></Route>
        <Route
          path="create-assessment"
          element={<CreateAssessment user={user} setUser={setUser} />}
        ></Route>
        <Route path="create-question" element={<CreateQuestion />}></Route>
        <Route path="blog"></Route>
        <Route path="contacts"></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="login" element={<Login setUser={setUser} user={user} />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="home" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
