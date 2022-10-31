import React, {useState, useEffect} from "react";
import "../questions/Question.css";
import {useNavigate} from "react-router-dom"

function CreateAssessmentForm({user, setUser}) {

  const navigate = useNavigate()

  // find the user ID
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log(userInfo.user.username)
  const userID= userInfo.user.id

  const[assessment, setAssessment] = useState([])
 
  const[title, setTitle]=useState("")
  const[description, setDescription]=useState("")
  const[duration, setDuration]=useState("")
  const[assessmentType, setAssessmentType]=useState("")

  function handleSubmit(e){
    e.preventDefault()
    fetch("/assessments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + userInfo.jwt 
      },
      body: JSON.stringify({
        title: title,
        description: description,
        duration: duration,
        assessment_type: assessmentType,
        user_id: userID
      })
      
    })
    // .then((response) => {
    //   if (response.ok) 
    //       {
    //           response.json()
    //           .then ((data) => setAssessment([...assessment, data]))
    //       }else {
    //           response.json()
    //           .then((errors) => console.log(errors))
    //       }

    //   } )
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("jwt", data.jwt);
      console.log(assessment)
      console.log(data)

      setAssessment([data, ...assessment])
      navigate("/create-question");
      // console.log(assessment)
     

      setTitle("")
      setDescription("")
      setDuration("")
      setAssessmentType("")
      
    })
  }


  return (
    <div className="main">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Assessment title"
            style={{ borderColor: "orange" }}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            name="title"
          />
        </div>
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Assessment Description"
            style={{ borderColor: "orange" }}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            name="description"
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="assessment_type"
            style={{ borderColor: "orange" }}
            onChange={(e) => setAssessmentType(e.target.value)}
            value={assessmentType}
            name="assessment_type"
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Duration in minutes"
            style={{ borderColor: "orange" }}
            onChange={(e) => setDuration(e.target.value)}
            value={duration}
            name="duration"
          />
        </div><br/><br/><br/>
        <div>
          <input className="inputField" type="submit" value="Preview" />
        </div>
        <div>
          <input
            className="inputField"
            style={{ backgroundColor: "orange" }}
            type="submit"
            value="Create"
          />
        </div>
      </form>
    </div>
  );
}
export default CreateAssessmentForm;
