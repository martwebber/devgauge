import React from "react";
import "./Question.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useRef } from "react";
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";
// import {QuestionsList} from "./questions"

const userInfo = JSON.parse(localStorage.getItem("userInfo") );
  console.log(userInfo.user.username)
  const userID= userInfo.user.id


function CreateNewQuestionForm({questions, setQuestions}) {
  const [topics, setTopics] =  useState([])
  const [postData, setPoastData] = useState({
    quiz: "",
    topic_id: 0,
    correct_answer: ""

}) 

useEffect(() => {
    fetch("/topics", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + userInfo.jwt 
        }
        
      })
      .then(res=>res.json())
      .then(r=>setTopics(r))

},[])


const [errors, setErrors] = useState([]);

const navigate = useNavigate()
function handleChange(e){
    let name = e.target.name 
    let value = e.target.value

    setPoastData({...postData, [name]: value })
}
console.log(postData)
const formReset = useRef()
function handleSubmit(e){
    e.preventDefault()

    fetch("/questions",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + userInfo.jwt 
        },
        body: JSON.stringify(postData)
    }).then((r) => {
    if (r.ok) {
      console.log(r)
        r.json().then(data=>setQuestions([...questions, data ]))
      navigate("/questions");
    } else {
      r.json().then((err) => setErrors(err.errors));
    }
  });
  formReset.current.reset()
}



const topicsList = topics?.map((topic)=>(
  <option key={topic.id} value={topic.id}>{topic.topic_content}</option>
))



  return (
    <div className="question">
      <form className="row g-3" onSubmit={handleSubmit} ref={formReset}>

      <div>
        {
        errors?.map((err) => (
            <p key={err} style={{color: "red"}}>{err}</p>
        ))
        }
      </div>

      <div>
          <select name="topic_id" onChange={handleChange} className="form-select">
            {topicsList}
          </select>
        </div>
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Question"
            onChange={handleChange}
            style={{ borderColor: "orange" }}
            name="quiz"

          />
        </div>
        
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Enter correct Answer"
            onChange={handleChange}
            style={{ borderColor: "orange" }}
            name="correct_answer"
          />
        </div>
        <div className="col-12">
          <input
            type="number"
            className="form-control"
            placeholder="assessment_id"
            onChange={handleChange}
            style={{ borderColor: "orange" }}
            name="assessment_id"
          /> 
          <br />

          <input
            className="inputField"
            type={"submit"}
            value="Create"
            style={{ backgroundColor: "orange" }}
          />
        </div>

       
        <br />
        <br />
        <div>
          {/* <input
            className="inputField"
            type="submit"
            value="Previous"
            style={{ backgroundColor: "blue" }}
          /> */}
          {/* <input
            className="inputField"
            type="submit"
            value="Next"
            style={{ backgroundColor: "orange" }}
          /> */}
        </div>
      </form>
    </div>
  );
}
export default CreateNewQuestionForm;
