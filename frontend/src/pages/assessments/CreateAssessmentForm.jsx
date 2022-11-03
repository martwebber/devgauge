import React, {useState, useEffect} from "react";
import "../questions/Question.css";
import {useNavigate} from "react-router-dom"

function CreateAssessmentForm({user, setUser}) {
  const history = useNavigate();

    function handleClick (path){
      history(path)
  
    }

  const navigate = useNavigate()

  // find the user ID
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  // console.log(userInfo.user.username)
  const userID= userInfo.user.id

  const [assessment, setAssessment] = useState([])
 
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
      console.log(data)

      setAssessment([data, ...assessment])
      navigate(`/assessments/${data.id}`);     

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
          <div style={{color:"white" } }>
            <h5 >Assessment Tittle: </h5>
          </div>
          
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
        <div style={{color:"white" } }>
            <h5 >Assessment Description: </h5>
          </div>
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
        <div style={{color:"white" } }>
            <h6 >Assessment Type: </h6>
          </div>
        {/* <div>
          <select className="form-select">
            <option >Select Assessment Type</option>
            <option>Trial Assessment</option>
            <option>Actual Assessment</option>
          </select>
        </div> */}
          <input
            type="text"
            className="form-control"
            placeholder="Actual or Trial"
            style={{ borderColor: "orange" }}
            onChange={(e) => setAssessmentType(e.target.value)}
            value={assessmentType}
            name="assessment_type"
          />
        </div>
        <div className="col-md-6">
        <div style={{color:"white" } }>
            <h6 >Timer: </h6>
          </div>
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
          <input className="inputField" type="submit"  onClick={() => handleClick("/assessments")} value="Back" />
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
