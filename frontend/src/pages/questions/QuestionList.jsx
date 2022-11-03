import React, { useEffect, useState } from "react";
import "./Question.css";
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import CreateNewQuestionForm from "./CreateNewQuestionForm";
import { CreateAnswerForm } from "../../components/answermodal/CreateAnswerForm";

function QuestionList() {

    const history = useNavigate();

    function handleClick (path){
      history(path)
  
    }
  const params = useParams();
  const [questionList, setQuestionList] = useState({
    assessmentid:"",
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
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    fetch(`/assessments/${params.assessmentid}`, {
      headers: {
        Authorization: "Bearer " + userInfo.jwt,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setQuestionList(data);
      });
  }, []);

  const [hide, setHide] = useState(true)

  const toggleQuestionForm = () =>{
    setHide((hide)=>!hide)

  }

  const hideClass = hide? 'hidden' :'';

  const handleDeleteQuestion = (e) =>{
    console.log('hu')
  }

  const handleUpdateQuestion = (e) =>{
    console.log(e)
  }

  return (
    <div className="listQuestions">
      <h1 className="assessmenttitle">{questionList.title}</h1>
      <div className="items">
        
      <p className="duration"><b>Duration: </b>{questionList.duration}</p>
      <p className="type"> <b>Assessment_type:</b> {questionList.assessment_type}</p>
      </div>
      
      <p className="assessmentbody">{questionList.description}</p>
      
      <ol>
      {questionList.questions.map((question) => {
        return (
          <div key={question.id}>
                      {console.log('quest',question.id)}

            <li className= "assessmentquiz">{question.quiz}    
            {/* <button type="submit" onclick={()=>console.log('hi')} className="btn btn-sm" style={{backgroundColor: "orange", borderRadius: 15 + "px"}} >Update</button>

            <button type="submit" className="btn btn-sm" onclick={handleDeleteQuestion} style={{backgroundColor: "red", borderRadius: 15 + "px"}} >Delete</button> */}

        </li>
            <p className= "assessmentCorrectAnswer"> <b>Correct Answer: </b><i>{question.correct_answer}</i></p>
            <p>Options: </p>
            <ul>
              {question.answers.map((answer) => {
                return <li key={answer.id} className="assessmentAnswer">{answer.answer_content} </li>;
              })}
            </ul>
            {/* <button onClick={() => handleClick(`/assessments/${params.assessmentid}/questions/${question.id}`)} style={{backgroundColor: "blue", borderRadius: 15 + "px"}} >Add Answers</button> */}

            <CreateAnswerForm
              questionid={question.id}
              quiz={question.quiz}
              assessmentid={params.assessmentid}
              
            />

            <br/><br/>
          </div>
        );
      })}
      </ol>
      <div> 
        <button onClick={() => handleClick("/assessments")} style={{backgroundColor: "blue", borderRadius: 15 + "px"}} >Back</button>

        <button onClick={toggleQuestionForm} style={{backgroundColor: "blue", borderRadius: 15 + "px"}} >Add Question</button>
      </div>

<div className={hideClass}>
  <CreateNewQuestionForm/>
</div>
    </div>
  );
}
export default QuestionList;