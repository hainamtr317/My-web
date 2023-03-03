import Toast from "react-bootstrap/Toast"
import Col from 'react-bootstrap/Col';
import React,{ useState} from "react";
function Toastmes(props) {
  
    return (
      <Col xs={6}>
      <Toast show={props.show} delay={3000} autohide >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">my Web</strong>
        
        </Toast.Header>
        <Toast.Body>{props.message}</Toast.Body>
      </Toast>
      </Col>
    );
  }
  
  export default Toastmes;