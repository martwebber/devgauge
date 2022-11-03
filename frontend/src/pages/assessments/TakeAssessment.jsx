import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../questions/Question.css";
import {useForm} from "../../hooks/useForm"

function TakeAssessment({ user }) {

  

  const history = useNavigate();

  function handleClick(path) {
    history(path);
  }
  const params = useParams();
  // console.log(params);
  const [listQuestions, setListQuestions] = useState({
    title: "",
    description: "",
    duration: "",
    assessment_type: "",
    questions: [
      {
        quiz: "",
        correct_answer: "",
        answers: [],
      },
    ],
  });
  const [selectAnswer, setSelectAnswer] = useState(0);
  const [postAnswer, setPostAnswer] = useState("");
 
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    fetch(`/assessments/${params.id}`, {
      headers: {
        Authorization: "Bearer " + userInfo.jwt,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setListQuestions(data);
      });
  }, []);

  // function handleChange(e){
  //   // console.log(e.target.value)
  //  setSelectAnswer(e.target.value)
  // }

  return (
    <div className="listQuestions">
      {/* <h1>Take Assessment</h1> */}
      <h1 className="assessmenttitle">{listQuestions.title}</h1>
      <div className="items">
        <p className="duration">
          <b>Duration: </b>
          {listQuestions.duration}
        </p>
        <p className="type">
          <b>Assessment-Type: </b>
          {listQuestions.assessment_type}
        </p>
      </div>
      <p className="assessmentbody">{listQuestions.description}</p>

      <ol>
        {listQuestions.questions?.map((item) => {
         
          return (
            <div>
               {/* {console.log(item.id)} */}
              <li className="assessmentquiz">{item.quiz}</li>
              <i>Select one answer </i>
              
              {item.answers.map((answer) => {
                return (
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value={answer.id}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      {answer.answer_content}
                    </label>
                    {/* setPostAnswer({answer.answer_content}) */}
                   
                  </div>
                  
                );
                
              })}
      
              <StudentPostAnswer
                selectAnswer={selectAnswer}
                setSelectAnswer={setSelectAnswer}
                assessmentid={params.id}
                questionid={item.id}
                correctAnswer={item.correct_answer}
                setPostAnswer={setPostAnswer}

               
              />
            </div>
          );
        })}
      </ol>

      <button
        onClick={() => handleClick("/students")}
        style={{ backgroundColor: "blue", borderRadius: 15 + "px" }}
      >
        Back
      </button>
    </div>
  );
}
export default TakeAssessment;
