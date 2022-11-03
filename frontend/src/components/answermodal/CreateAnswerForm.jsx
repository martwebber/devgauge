import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useRef } from 'react';
import useForm from '../../hooks/useForm';

export const CreateAnswerForm = (props) => {
  const { assessmentid, quiz, questionid } = props
  const [inputdata, handleChange] = useForm();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const userInfo = JSON.parse(localStorage.getItem("userInfo") );
    const history = useNavigate();

    function handleClick (path){
      history(path)
  
    }
    const navigate = useNavigate()
    console.log(inputdata)
    const formReset = useRef()
    function handleSubmit(e){
      e.preventDefault()
      fetch("/answers",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + userInfo.jwt 
          },
          body: JSON.stringify({
            question_id:questionid,
            answer_content:inputdata.answer_content
          })
      }).then((r) => {
      if (r.ok) {
        console.log(r)
          r.json().then(data=>
            {
              console.log(data)
              //setPoastData([...postData, data])
              handleClose()
              navigate(`/assessments/${assessmentid}`);
              // handleAnswers(data)     
            })
      } else {
        r.json().then((err) => console.log(err));
      }
    });
    formReset.current.reset()
    window.location.reload(false)
  }
  
    return (
      <div>
        <div className="create-answer">
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{quiz}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <form  className="row g-3" >
        <div className="col-12">
          <input
            type="text"
            name="answer_content"
            onChange={handleChange}
            className="form-control"
            placeholder="Type an answer..."
            style={{ borderColor: "orange" }}
          />
        </div>
               <br />
        <div>
        </div>
      </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            create answer
          </Button>
        </Modal.Footer>
      </Modal>

      </div>
     
      <button onClick={handleShow} style={{ backgroundColor: "blue", borderRadius: 15 + "px" }}>
        Add answer
      </button>
      </div>
    )
}
